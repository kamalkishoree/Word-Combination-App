<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;
use App\Models\SearchWordQuery;
use App\Models\wordsCombination;


class WordCombinationController extends Controller
{

    public function wordCollection(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $Exist_SearchWordQuery = SearchWordQuery::whereRaw("FIND_IN_SET(?, REPLACE(permutation, ' ', ''))", [
            $request->name
        ])->where('word_length', strlen($request->name))->first();

        if ($Exist_SearchWordQuery) {
            $exist_search_word = $Exist_SearchWordQuery;
            $exist_wordCombination = $exist_search_word->wordCombination;
            $response = [
                'search_word' => $request->name,
                'word_combination' => explode(', ', $exist_wordCombination->result_words),
                'status' => 200
            ];
            return response()->json($response);
        }

        $combination = $this->permutationofString($request->name);
        try {
            $client = new Client();
            $response = $client->request('GET', 'https://wordcollectanswers.com/en/?letters=' . $request->name);
            $statusCode = $response->getStatusCode();
            $content = $response->getBody()->getContents();
            $crawler = new Crawler($content);
            $divContent = $crawler->filter('.words')->html();
            $text_array = explode("<br>", preg_replace('/\d+\.\s*/', '', $divContent));
            $result = array_map(function ($item) {
                return strip_tags($item);
            }, $text_array);

            if (! empty($result)) {
                $word_combination = new wordsCombination();
                $word_combination->result_words = implode(', ', $result);
                if ($word_combination->save()) {
                    $search_word = new SearchWordQuery();
                    $search_word->search_word = $request->name;
                    $search_word->word_length = strlen($request->name);
                    $search_word->permutation = implode(', ', $combination);
                    $search_word->words_combinations_id = $word_combination->id;

                    if ($search_word->save()) {
                        $response = [
                            'search_word' => $request->name,
                            'word_combination' => explode(',', $word_combination->result_words),
                            'status' => 200
                        ];
                        return response()->json($response);
                    }
                }
            }
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function permutationofString($string)
    {
        $data_array = [];

        function permute($str, $l, $r, &$perms)
        {
            if ($l == $r) {
                $perms[] = $str;
            } else {
                for ($i = $l; $i <= $r; $i ++) {
                    $str = swapPositions($str, $l, $i);
                    permute($str, $l + 1, $r, $perms);
                    $str = swapPositions($str, $l, $i); // backtrack
                }
            }
        }

        function swapPositions($str, $i, $j)
        {
            $temp = $str[$i];
            $str[$i] = $str[$j];
            $str[$j] = $temp;
            return $str;
        }

        $perms = [];
        permute($string, 0, strlen($string) - 1, $perms);

        // Ensure unique permutations only, just in case
        $perms = array_unique($perms);

        foreach ($perms as $perm) {
            $data_array[] = $perm;
        }
        return $data_array;
    }
}
