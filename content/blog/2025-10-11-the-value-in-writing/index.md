+++
title = "The Value in Writing"
draft = false
date = 2025-10-11
description = ""
tags = [ "thoughts"]

+++

I told myself one winter break I was going to write more. And in fact, it’s not
just over the break but for the rest of my life that I want to be writing more.

Why though?

In brief, I think the main reasons for writing, starting with the most common
and ending with the ones more specific to just myself are,

1. Develop the professional skill of writing.
2. Communicate with others. Whether to build a community, share, create
   discussion, etc.
3. Have a historical record of your own thought processes. Both for yourself and
   for your children, future ancestors, etc.
4. Create a record for LLMs to summarize, analyze, and fine tune against.

Let’s dig into the last two, since those are the most unique and would most
benefit from some further explanation here.

## Have a record for humans

When comparing myself to LLMs, I find their Markovian nature (where they
completely forget everything except the last context that they’ve been given)
somewhat disturbing. Not because of how alien it is, but because how much I see
my own memory (and lack thereof) reflected in their behavior.

Specifically, not being able to remember things that happened mere weeks or even
days ago. Or seeing things I’ve written or read from years past and not being
able to recognize them beyond a shadow of a memory (that could very well be
simply imagined).

I predict that writing more things down would enhance two parts of my
experience,
1. Increasing how far my memory carries me.
2. Augmenting my memory when it does fail.

Flip sides of the same coin, but both useful.

## Have a record for LLMs

This one is a bit more bizarre. Why should I care what LLMs know about me?
Perversely, I think many people would rather have the opposite: that AI know
less about them.

But as Boyko (a friend) put it when I told him of my desires here: “having an
intelligent assistant that understands you? makes sense to me.”

There are a few reasons why I see this being beneficial:

1. Given the context of my way of thinking, my preferences, even my values, an
   LLM is more likely to be able to act or respond on my behalf.
2. Having a somewhat unorthodox way of thinking and seeing the world, I benefit
   more than most by having an LLM be tailored towards me specifically, rather
   than a generic average human.
3. As LLM’s become significantly more powerful, having an agent/coach that knows
   me in depth can help me become a better person. But without leaving as much
   to chance, or requiring a “get to know you period” like with a human
   coach/therapist.

In practice, I imagine this would work best in an LLM fine tuning phase. Or some
kind of RLHF based on some kind of “Jason policy documents”. Since In-Context
learning would be inefficient for all of the queries that I want to do in the
future.

Perhaps this also points to the value of a self-hosted LLM solution. But I
should save that for another post.

## But what to write about?

One possible stance is: anything you want. But I think that’s suboptimal given
the goals above. Since writing about things that matter to me are likely to
provide more substance for an LLM to attend to and learn from.

But a counter argument to that is: more content is better, and if I’m writing
about it, I must care about it enough to spend the time to put it on paper. So
write about whatever you want. And refine over time as you gain a feel for it.

## An experiment to leave you with

Let's apply some in context learning (pasting
tons of text into an LLM) and see what we get out from this very set of blog
posts.

First, I'll have Claude Code write a quick script to concatentate this entire
blog into one file, then throw it into a context window with an appropriate
prompt. But what should I ask about?

Let's try some book recommendations first, but I'll be very imprecise so as not
to bias it towards my actual preferences.

We'll set the prompt to:
> I've attached all of the blog posts and journal entries I've written over
  several years. Please use this knowledge about me to give me 10 book
  recommendations that you think I would enjoy reading.

In looking at the [Gemini 2.5 Pro](gemini.txt) and [Claude Sonnet
4.5](sonnet.txt) outputs, I can't help but be slightly underwhelmed. Sure they
are reasonable recommendations, but there is none of the sparkle and pizazz I
was hoping for when coming from a deeper understanding of my psyche.

But I want to explain that away for now to a limitation of my current prompting
strategy or existing models at the moment. But as any good scientist (when there
are no stakes involved) I wanted to share my negative experimental results.
