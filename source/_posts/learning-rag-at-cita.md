---
title: "Learning RAG at a CITA Event"
date: 2026-09-09 20:00:00
description: Reflections from a CITA event on retrieval-augmented generation, vector search, evaluation and building useful AI systems.
reading_time: 6 min read
post_number: "03"
article_type: Event reflection
aside_label: Key topics
footer_kicker: One idea I’m taking with me.
footer_title: Good AI systems need both useful context and careful engineering.
categories:
  - Career
tags:
  - AI
  - Software Engineering
---

Last night, I attended a CITA event focused on retrieval-augmented generation (RAG). The session introduced the idea from several perspectives: what RAG is, how a basic pipeline works, which infrastructure supports it, and how to evaluate whether the system is actually giving useful answers.

I have been learning more about AI-assisted development, so it was helpful to see RAG explained as an engineering system rather than simply as a feature that can be added to a chatbot.

## 01 / From a Base Model to RAG

One of the first ideas from the event was a useful spectrum of how extra information can reach a language model.

A base LLM answers from the information it learned during training. A prompt can provide additional context directly, while RAG retrieves relevant information from a knowledge base and adds it to the prompt before the model generates an answer.

The open-book exam analogy made this easy to understand. A base model is like answering a closed-book exam from memory. RAG is like receiving the relevant pages from a textbook before writing the answer.

This distinction matters because RAG does not change the model itself. It gives the model better information to work with at runtime.

## 02 / What the RAG Flow Looks Like

The basic flow can be described in three steps:

1. **Retrieve** relevant chunks from a knowledge base.
2. **Search and select** the best matches for the user’s question.
3. **Generate** an answer grounded in the retrieved context.

Behind this flow is an indexing process that usually happens before a user asks a question. Documents are loaded, split into smaller chunks, converted into embeddings and stored in a vector database.

When a question arrives, the system embeds the query, searches for similar vectors, adds the most relevant chunks to the prompt and sends the augmented prompt to the language model.

What I found interesting is that the visible chatbot response is only the final part of the system. A large part of the quality comes from earlier decisions: how documents are divided, how they are represented, how similarity is measured and how the retrieved context is selected.

## 03 / The Building Blocks

The presentation broke the system down into a few core components:

- **Knowledge base:** the source material, such as documents, wikis, code or tickets.
- **Chunker:** the component that splits large documents into smaller passages.
- **Embedding model:** the model that turns text into vectors representing meaning.
- **Vector database:** the storage layer used to search those vectors by similarity.
- **Retriever:** the component that finds the most relevant passages for a query.
- **LLM and orchestration:** the layer that builds the prompt and generates the final answer.

This gave me a clearer mental model of where different problems can occur. If the answer is poor, the issue may not be the language model itself. The wrong document may have been retrieved, the chunks may be too large or too small, or the prompt may not use the retrieved context effectively.

## 04 / Retrieval Is Not the Same as Understanding

One point I want to remember is that retrieving information is only part of the problem.

The system may find a passage that looks similar to the question but does not contain the information needed to answer it. It may also retrieve too much context, making it harder for the model to identify what matters. Even when the right passage is retrieved, the model still needs to use it accurately.

This is why a RAG system needs more than a successful demo. A response that looks convincing is not automatically a response that is correct, relevant or supported by the source material.

## 05 / What Should Be Measured?

The event also covered several useful evaluation areas:

- **Context precision and recall:** Did the system retrieve the right chunks?
- **Faithfulness or groundedness:** Is the answer supported by the retrieved context?
- **Answer relevance:** Does the response actually answer the user’s question?
- **Latency and cost:** Is the system fast and affordable enough to use?

These measurements helped me think about AI features in a more practical way. Evaluation is not something to add only after a system has been built. It should influence the design from the beginning, especially when the system is intended to answer questions about real documents or personal information.

## 06 / The Custodian Project

The event also introduced a project called **Custodian**, which is designed to make the first part of a RAG pipeline easier to use.

The idea is that a user should be able to provide files such as a resume or portfolio and let the system handle the chunking, embedding, storage and retrieval setup. Instead of configuring every part of the vector-search pipeline manually, the user can focus on the application that uses the grounded answers.

The example of a chatbot answering questions about someone’s skills, experience and projects was particularly relevant to me. It showed a practical use case for RAG: answering questions from a controlled set of personal documents rather than relying on general model knowledge.

## 07 / What I Learned

The biggest lesson from the evening was that RAG is not just a prompt technique. It is a complete data and application workflow.

The quality of the final answer depends on the quality of the source documents, the chunking strategy, the embedding model, the retrieval process, the prompt design and the evaluation method. Each part creates opportunities for improvement, but also new failure modes.

I also came away with a better understanding of why engineering fundamentals remain important when building AI products. It is easy to focus on the model because the generated text is the most visible part. However, reliable software still depends on clear system boundaries, good data handling, testing, observability and thoughtful trade-offs.

## 08 / Moving Forward

I would like to build a small RAG project myself so I can understand the full flow in practice, from preparing documents to evaluating retrieved context and generated answers.

Rather than starting with a complicated application, I want to begin with a focused knowledge base and a small set of questions. That would make it easier to inspect the retrieval results, compare different chunking approaches and understand where the system succeeds or fails.

The event gave me a useful starting point. The main idea I am taking away is simple:

> A helpful AI answer needs more than a capable model. It needs the right context, a reliable retrieval process and evidence that the answer is grounded.