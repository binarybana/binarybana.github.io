+++
date = 2025-09-15T17:14:12
draft = false
title = "Language is intelligence"
description = "Why embodied intelligence is not on the AGI tech tree"
tags = [ "ai", "llms", "intelligence", "response"]

+++

My friend Krishna just [published](https://highentropythoughts.substack.com/p/the-ungrounded-flavor) published a great exposition for why he thinks that LLM's do not have true intelligence. So take a few minutes to read that first.

Briefly, I'll recount his argument here to make sure I understand it completely. Human's build our knowledge through a layer cake of growing abstractions. Starting at experiences directly lived we then build analogies, concepts, and finally world models. The fact that the world models we build are similar to those of other humans (because we all share many similar enough experiences) is one of the reasons that we are able to communicate with each other so effectively.

LLM's build their knowledge cake a different way. LLM's build their conceptual frameworks through next token prediction across vast data sets of human writing output. And through the magic of deep learning's transformer architectures, something that looks like intelligence emerges. But it can't be real intelligence -- or at least the form that we are familiar with -- since it has no felt experiences to build those concepts upon.

While I think this argument is well stated and commonly believed -- in the vein of embodied intelligence arguments -- I disagree with it.

Let me walk you through why.

## The senses
First, let's consider this passage of text:

> It is with a kind of fear that I begin to write the history of my life. I have, as it were, a superstitious hesitation in lifting the veil that clings about my childhood like a golden mist. The task of writing an autobiography is a difficult one. When I try to classify my earliest impressions, I find that fact and fancy look alike across the years that link the past with the present. The woman paints the child’s experiences in her own fantasy. A few impressions stand out vividly from the first years of my life; but “the shadows of the prison-house are on the rest.” Besides, many of the joys and sorrows of childhood have lost their poignancy; and many incidents of vital importance in my early education have been forgotten in the excitement of great discoveries. In order, therefore, not to be tedious I shall try to present in a series of sketches only the episodes that seem to me to be the most interesting and important.

If I pressed you to guess, do you think this was written by an LLM or a human?

What if I were to tell you that this is indeed written by a human, but one that had _vastly_ different lived experiences (with high probability) than you or I?

Guessed the "trick" here yet? The passage in fact was written by none other than [Helen Keller](https://standardebooks.org/ebooks/helen-keller/the-story-of-my-life/text/chapter-1-1) who was born blind and deaf from birth. Yet despite never seeing or hearing a single thing that you and I did growing up or even across her entire lifespan, she developed an intelligence that is remarkably similar to our own.

Or said a different way, the experiences I had growing up had so little overlap with Helen Keller's that I cannot imagine our similar intelligences were a result of that small overlap.

But how did Helen Keller develop her remarkable capabilities of language and intelligence then? To that, we must travel farther East.

## How language shapes our minds
Let's let Gemini paint the [lightly edited] scene:
> In the 1930s, Alexander Luria, a student and collaborator of Vygotsky, conducted a series of psychological expeditions to Central Asia, specifically Uzbekistan and Kyrgyzstan. The goal was to study how radical social and economic changes brought about by the Soviet collectivization program—which included the introduction of compulsory schooling, new agricultural methods, and a broader social infrastructure—affected cognitive processes.
>
> The "control" group in this study consisted of rural, illiterate peasants who had not been exposed to formal education or modern society. The "experimental" groups were their peers who had received some level of formal schooling and were participating in the new collective farms. Luria and his team administered a variety of psychological tests and interviews to both groups, observing their reasoning, perception, and problem-solving skills.
>
> The results, which Luria documented in his 197[6] book, [Cognitive Development: Its Cultural and Social Foundations](https://www.amazon.com/Cognitive-Development-Cultural-Social-Foundations/dp/0674137329/ref=sr_1_1), were a stark confirmation of Vygotsky's theories about the socio-cultural nature of thought. [He found that children, when not exposed to a modern education shared many qualities:]
>
> * Inability to reason abstractly: The uneducated peasants struggled with hypothetical questions. When asked to solve a syllogism like, "In the Far North, all bears are white. Novaya Zemlya is in the Far North. What color are the bears there?" they would often respond by saying they'd never been to the Far North and couldn't know. They were unable to separate the logical structure of the problem from their personal, lived experience.
>
> * Concrete, situational thinking: The peasants' thinking was very concrete and tied to specific situations. Their classifications of objects, for example, were based on practical use rather than abstract categories (e.g., they might group a hammer, a saw, and a log together because "you use them all to make things," rather than grouping all tools together).
>
> * Reliance on personal experience: Luria found that their responses were consistently grounded in their direct, personal experience. They could not conceive of a hypothetical scenario that was outside of their immediate reality, as in your example of the burning house.
>
> In contrast, the young adults who had attended school, even for a short time, demonstrated a qualitatively different way of thinking. They were capable of abstract thought, could solve hypothetical problems, and categorized objects based on abstract principles.

So according to Luria, modern academic practices shape our human intelligence. And academic curricula are formed from sequences of structured symbols in language and mathematics.

## Conclusion
In conclusion, let us synthesize these two statements:

1. Humans with vastly different experiences can end up with similar kinds of intelligences.
2. Humans with similar lived experiences but different symbolic training routines can arrive at quite different intelligences.

The only way I can square these two statements is that language is more important than embodied experience as a vehicle for the development, encoding, and construction of intelligence.

Therefore, I don't think it is too much of a stretch that AGI can arise from the datasets that already exist and are being used to train LLMs.

However, I do think something is missing from current training LLM training regimes. So in part two, we'll cover why internal reward systems are critical for scaling beyond next token prediction.
