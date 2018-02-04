---
title: "Racket and Abstraction"
date: "November 5th, 2017"
---

Earlier today, I took part in a conversation about the lack of scanf in racket.
A case was mentioned where some unlucky soul was trying to parse comma-seperated square-bracket
lists in racket, and realized that scanf would have served better.
One poster asked how something so important could be missing, and derided racket as "an academic language."
Many solutions were presented in the conversation, of varying levels of generality.

Most of the solutions revolved around using regex and capture groups to bind the terms:

```
(regexp-group-read #rx"\\[(.+), *(.+), *(.+)\\]" "[1, foo, 0.42]") => (1 foo 0.42)
```

Some sought to combine scanf and regex in various ways:

```
(regexp-scan #rx"\\[%d, %s, %f\\]" "[1, foo, 0.42]") => (1 foo 0.42)
```

And some modified the reader to help parse the terms.
Each was different, with their own drawbacks and strengths, an abstraction in their own right.
This process, considering what the optimal abstraction is, balancing speed and ease of implementation and ease
of use, is the fun part of language design.

In other languages, you only have what the language implementors think was good enough. You use the same
abstraction over and over, and you lose the ability to concieve of other abstractions.
Even if you're a learned programmer, and know of different abstractions in many languages, it doesn't mean you can create new ones.
That skill, like any other, is honed through practice, and while knowing of many abstractions certainly helps, only by creating new
abstractions will you get better at it.

While users of other languages see the lack of tools such as this in languages like racket as a point against them,
lispers see a space full of possibilities, free to explore, free to create whatever abstractions we damn well please.
For those of you who haven't done it, this is truly exhilarating. The more general the abstraction, the better it feels.
More than that, it opens new realms of thought. The progression is astounding: it starts with writing macros to eliminate common
patterns, and then you get above the clouds and start thinking of entirely new ways to destructure lists, parse strings,
annotate, control state, and even abstractions to help metaprogramming.

Lest I get too high up on my soapbox, I should note that this property is not exclusive to lisp, lisp is just well-suited
to this task, because metaprogramming used with s-exprs is a convient way to implement many, many forms of abstraction.
This property is the thing that we, as language designers, should be optimizing for.
