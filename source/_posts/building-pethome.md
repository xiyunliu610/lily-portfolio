---
title: "Building PetHome: From an Idea to a Full-Stack Project"
date: 2026-09-04
description: How firsthand pet-care experience became a practical platform for bookings, payments and daily care.
reading_time: 5 min read
post_number: "01"
article_type: Project note
repository: https://github.com/xiyunliu610/yt-paws-platform
gallery_label: PetHome mobile application screens
gallery_tech:
  - React Native
  - NestJS
  - PostgreSQL
footer_kicker: Thanks for reading.
footer_title: I’m still building PetHome — and learning with every release.
categories:
  - Project Journal
tags:
  - React Native
  - NestJS
  - PostgreSQL
  - Prisma
  - Stripe
gallery:
  - src: /images/pethome/home-full-screen.jpg
    alt: PetHome mobile app home screen
  - src: /images/pethome/booking-full-screen.jpg
    alt: PetHome mobile app booking screen
---

## 01 / Introduction

Pet boarding services are becoming increasingly popular, but many existing platforms charge high commission fees. They are also mainly designed for bookings between individual pet owners and carers, rather than for people who run their own pet boarding businesses.

This gave me the idea of building **PetHome** — a platform that can be used by both individual pet carers and commercial boarding providers. The goal is to make it easier to manage bookings, pet information, payments and daily care records in one place.

## 02 / What I Worked On

I have completed the first stage of the project, which focuses on the main booking process.

Users can create profiles for their pets and record important details, such as feeding instructions, health information and care requirements. They can then select a service, submit a booking request and make a payment.

For service providers, the system makes it easier to view upcoming bookings, check each pet’s information and manage booking statuses. I also worked on connecting the frontend, backend and database so that booking, pet and payment information can be stored and updated correctly.

The project uses React Native for the user interface, NestJS for the backend, PostgreSQL and Prisma for data management, and Stripe for online payments.

## 03 / Challenges

One challenge was designing the platform for both individual carers and commercial boarding businesses. Their needs are similar, but a business may manage more pets, customers and bookings at the same time. I therefore needed to think carefully about the database structure and how the platform could support different types of users.

Another challenge was managing the full booking and payment process. A booking can move through several stages, such as pending, confirmed, paid, completed or cancelled. The booking status and payment status need to remain consistent, especially when a payment fails or a user tries to pay more than once.

Connecting the frontend, backend and database was also more complicated than working only on the user interface. When something went wrong, I had to check each part of the system to find where the problem started. This helped me develop a better understanding of how a full-stack application works as a whole.

## 04 / What I Learned

Through this project, I learned how important it is to design the data structure before building individual features. Pets, owners, service providers, bookings and payments are closely connected, so a change in one area can affect several other parts of the application.

I also gained more practical experience in backend development. I learned how to create APIs, validate user input, manage database records and connect payment results with booking information.

Most importantly, I learned that building a useful product starts with understanding a real problem. Because I have experience providing pet boarding services, I could design the platform around situations that carers and pet owners actually face.

## 05 / What’s Next

The next feature I plan to develop is an AI-assisted daily report.

Pet carers will be able to record information about a pet’s meals, activities, behaviour and general condition. The system will then use these notes to create a clear daily summary for the pet owner.

I also plan to continue improving booking management, notifications and the overall experience for both pet owners and service providers.
