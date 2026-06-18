---
title: "Queueing Calculator"
subtitle: "Planning estimates for stochastic service systems"
description: "A browser-based calculator for utilization, waiting time, and capacity tradeoffs under M/M/1 and M/M/c assumptions."
status: "prototype"
featured: true
methods: ["Queueing Theory", "Erlang C", "Operations Research"]
links:
  demo: "/projects/queueing-calculator"
  github: "https://github.com/walton-j"
---
The Queueing Calculator helps managers, students, and analysts estimate how arrival rates, service rates, and staffing levels affect congestion.

## What it estimates

The initial static version computes utilization, expected number in the system and queue, and expected waiting time. It supports **M/M/1** and **M/M/c** steady-state models.

<div id="calculator-mount"></div>

## Assumptions and interpretation

Arrivals are Poisson, service times are exponential, servers are identical, and the system is evaluated in steady state. These outputs are educational planning estimates rather than operational guarantees. Simulation or a richer stochastic model is appropriate when arrivals are nonstationary, service times are heavy-tailed, priorities exist, or resources interact.
