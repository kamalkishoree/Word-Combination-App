<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SearchWordQuery extends Model
{
    use HasFactory;
    
    
    public function wordCombination()
    {
        return $this->hasOne(wordsCombination::class, 'id', 'words_combinations_id');
    }
    
    
}
