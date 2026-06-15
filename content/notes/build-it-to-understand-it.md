---
title: "Build it to understand it"
date: "2026-04-20"
readTime: "3 min"
excerpt: "I don't really understand a system until I've built the smallest real version of it..."
---

There is a kind of understanding you can only get by building the thing. You can read about how something works, nod along, even explain it back convincingly, and still not understand it. Then you sit down to build the smallest real version and discover all the questions the explanation quietly skipped.

The bot answering questions on this site is an example. I could have written a doc about how a retrieval bot should work. Instead I built one. It is small on purpose: chunk some text, embed it, find the closest pieces to a question, hand them to a model with a tight set of rules, stream the answer back. Nothing exotic.

But building even that tiny version taught me things no doc would have. How much the chunking strategy decides the answer quality before the model ever runs. How fast a vague rule turns into a confidently wrong response. How the failure cases, not the happy path, are where all the real design lives. You feel these things in your hands when you build. You only nod at them when you read.

This is why I keep the versions small. The goal is not a production system, it is comprehension. A toy you fully understand teaches you more than a platform you half understand. Once the small thing is real and working, scaling it up is mostly engineering. The understanding was the hard part, and you bought it with the prototype.

So when I want to understand a new piece of the AI stack, I do not start with the survey paper. I start with the smallest version I can get running by the end of the day. It is almost always wrong in interesting ways, and the wrongness is the lesson. Build it to understand it. Then, maybe, build it for real.
