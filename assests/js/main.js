{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Ever Clean Anderson - JS\
\
// footer year\
document.getElementById("year").textContent = new Date().getFullYear();\
\
// mobile nav toggle\
const toggle = document.querySelector(".nav__toggle");\
const menu = document.querySelector("#navMenu");\
\
if (toggle && menu) \{\
  toggle.addEventListener("click", () => \{\
    const isOpen = menu.classList.toggle("is-open");\
    toggle.setAttribute("aria-expanded", String(isOpen));\
  \});\
\
  // close menu after clicking a link (mobile)\
  menu.querySelectorAll("a").forEach((a) => \{\
    a.addEventListener("click", () => \{\
      menu.classList.remove("is-open");\
      toggle.setAttribute("aria-expanded", "false");\
    \});\
  \});\
\}\
}