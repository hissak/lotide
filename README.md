# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hissak/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first value of an array.
* `tail(...)`: returns an array without the first value.
* `middle(...)`: returns an array that contains the middle value(s) of an array.
* `assertEqual(...)`: Asserts that two values are equal.
* `eqArrays(...)`: Compares two arrays to determine if they are equal.
* `assertArraysEqual(...)`: Asserts that two arrays are equal.