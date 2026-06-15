---
title: "Agents are mostly plumbing"
date: "2026-06-01"
readTime: "4 min"
excerpt: "Take the magic apart and what's left is a loop, some tools, and a lot of glue..."
---

It is worth taking an "AI agent" apart on a whiteboard at least once, because the word does a lot of hiding. People hear agent and picture something that thinks. Pull off the cover and what you actually find is pretty mundane: a model, a loop, a handful of tools, a bit of memory, and a surprising amount of glue holding it together.

The model is the only part you did not write. You are renting that intelligence by the token. Everything around it is ordinary software, and ordinary software is exactly where agents succeed or fall over.

Walk the loop. A request comes in. You stuff some context into a prompt. The model emits text, and somewhere in that text is an intention: call this tool, fetch this thing, stop now. Your code parses that, runs the tool, takes the result, and feeds it back in. Then you do it again. That is the whole trick. A while loop with a very expensive function call in the middle.

Once you see it this way, the hard parts relocate. They are not in the "thinking." They are in the plumbing:

What goes into the context window, and what you leave out. (Most failures I have seen are really retrieval failures wearing a costume.)

What happens when the model asks for a tool that does not exist, or hands you arguments that do not parse.

When to stop. Loops that do not know how to quit are how you get an agent that confidently spends twenty steps going nowhere.

What the thing is allowed to touch. The moment an agent gets real permissions, the interesting question stops being "is it smart" and becomes "what can it break."

None of that is glamorous and all of it is engineering. The intelligence is the part you cannot control. The reliability is the part you can, and it lives entirely in the boring scaffolding.

So when someone shows me a slick agent demo, the demo is not the thing I am evaluating. I am wondering about the plumbing they did not show me. That is where the product actually is. The magic is rented. The glue is yours.
