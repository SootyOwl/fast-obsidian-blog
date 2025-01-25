---
layout: post
creation-date: <% tp.file.creation_date() %>
modification-date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
title: <% tp.file.title %>
permalink: /{{ title | slugify }}/
---
