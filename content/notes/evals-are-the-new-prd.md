---
title: "Evals are the new PRD"
date: "2026-05-10"
readTime: "4 min"
excerpt: "If you can't write the eval, you don't understand the feature..."
---

For most of product history the PRD was the contract. You wrote down what the thing should do, engineering built to the spec, and you shipped when it matched. That model quietly breaks the moment your feature is built on a model instead of deterministic code.

A traditional feature either works or it does not. An AI feature works most of the time, in a way that is hard to describe and harder to promise. "Summarize the document well" is not a spec. It is a vibe. And you cannot ship a vibe.

So the artifact that matters now is the eval.

The eval forces the question the PRD let you dodge: what does good actually look like, specifically enough that a machine could grade it. The day I sit down to write the eval is the day I find out whether I understand the feature at all. Half the time I do not, and that is the point. The eval surfaces the fuzzy thinking before a single line of code hides it.

A few things I have learned writing them.

**Write the failure cases first.** The happy path is easy and lies to you. The feature lives or dies on the weird input, the adversarial user, the edge that looks rare until it is your top support ticket.

**The eval is the ship gate, not a nice to have.** If it does not clear the bar, it does not go out. No amount of demo polish overrides that. This is unpopular right up until it saves you from shipping something embarrassing.

**Evals are a living thing.** Models change under you, usage shifts, new failure modes appear. The eval suite is not written once. It grows every time reality teaches you something the spec missed.

The PRD is not dead. You still need to say what you are building and why. But the center of gravity has moved. The question is no longer "did we build what the doc said." It is "can we prove it is good." If you cannot write that proof, you do not understand the feature yet. Go back until you do.
