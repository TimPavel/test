<?php

function isPalindrome($word) {
	$word = preg_split('//u', $word, NULL, PREG_SPLIT_NO_EMPTY);
	$word2 = array_reverse($word);

	$word = implode("", $word);
	$word2 = implode("", $word2);


	return($word === $word2) ? true: false;

}

isPalindrome('forf');

