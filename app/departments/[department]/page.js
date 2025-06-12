import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { notFound } from "next/navigation"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Department data
const departmentsData = {
  cse: {
    name: "Computer Science & Engineering",
    description: "Access resources for CSD courses",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "csd101",
        name: "CSD 101 - Introduction to Computer Science",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1hQArhgXsXn0bz__7oOZzmNjBk0Ww9YXB?usp=sharing"
      },
      {
        id: "csd102",
        name: "CSD 102 - Data Structures",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1sWSxvqyBnY-utm5qXYFcSlMbuzlFyZwT?usp=sharing"
      },
      {
        id: "csd201",
        name: "CSD 201 - Data Structures",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1vo1W-eGhKne5ICR3VsGQ3nb1ki-xrxmD?usp=sharing"
      },
      {
        id: "csd202",
        name: "CSD 202 - Database Management Systems",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1JCeQ0qZVIKzJeXtaFTutrT9UkW0xz29M?usp=sharing"
      },
      {
        id: "csd204",
        name: "CSD 204 - Operating Systems (2020)",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/17JLsCA6e1GhWuXOrju5NIe5V4zYiiq0p?usp=sharing"
      },
      {
        id: "csd205",
        name: "CSD 205 - Discrete Mathematics",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1_g6vzWKwgSnKyo0mVWjW3JWoG_6LeUxx?usp=sharing"
      },
      {
        id: "csd206",
        name: "CSD 206 - Computer Organisation",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1c6pOwKxpl9hRgMVDAPasKnqcmNadtUw-?usp=sharing"
      },
      {
        id: "csd207",
        name: "CSD 207 - OOP In Java",
        image: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1vK3_qoZnR-B6p-LBmBEae2ccNeEhC5mQ?usp=sharing"
      },
      {
        id: "csd208",
        name: "CSD 208 - Computer Architecture",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/19QMyvCXZ8l6yatx7AUKek3QQBm63jAwi?usp=sharing"
      },
      {
        id: "csd209",
        name: "CSD 209 - Introduction to Probability",
        image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/12PMpzRmqqKcOuld-60Fn4Xnht3Oa2OMY?usp=sharing"
      },
      {
        id: "csd301",
        name: "CSD 301 - Software Engineering",
        image: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71",
        driveLink: "https://drive.google.com/drive/folders/1GibeOL9wDfsHFsN70yow1MGsAdjndg6t?usp=sharing"
      },
      {
        id: "csd302",
        name: "CSD 302 - Design and Analysis of Algorithms",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/18cCerSi_a6AP_c9O3x2FM8j1XTAcS0gJ?usp=sharing"
      },
      {
        id: "csd303",
        name: "CSD 303 - Theory of Computation",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1jhwDF5nMbcr29IrwEREXqHaUXhJRHXqB?usp=sharing"
      },
      {
        id: "csd304",
        name: "CSD 304 - Computer Networks",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1XURPTgR7pUjHY6YweR7SDVUzeuiXLLhc?usp=sharing"
      },
      {
        id: "csd311",
        name: "CSD 311 - Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        driveLink: "https://drive.google.com/drive/folders/1q-VKtK_2rh3MLnNYq7JGKVLs5xcO7_yb?usp=sharing"
      },
      {
        id: "csd316",
        name: "CSD 316 - Introduction to Machine Learning",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/16N9hBOfyBhSvZm-nu27NgUaFaISq4TCv?usp=sharing"
      },
      {
        id: "csd330",
        name: "CSD 330 - Security Analytics",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/14LJEeptLzka-SOGiUszFg6HvxcxBKx0T?usp=sharing"
      },
      {
        id: "csd342",
        name: "CSD 342 - Data Mining and Data Warehousing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/13b4GBhZoi0O26LY5K_S3JTVaeCargc4v?usp=sharing"
      },
      {
        id: "csd350",
        name: "CSD 350 - Natural Language Processing",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1uKeiZRIU_lReL_EDrg2G2MAHPeKaiExO?usp=sharing"
      },
      {
        id: "csd360",
        name: "CSD 360",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1kuKlkDjhtcCXqayA4QcvcskJ_i9JB6I0?usp=sharing"
      },
      {
        id: "csd361",
        name: "CSD 361",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1l0IK6evPGr02pAb8CKJ4J2mjuDx0GL2m?usp=sharing"
      },
      {
        id: "csd404",
        name: "CSD 404 - Internet of Things",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1jGjvf6qXgkoOC5paYmzZWnqRuOYFNTZX?usp=sharing"
      },
      {
        id: "csd428",
        name: "CSD 428 - Software Project Management",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1XBA2B5el4E-vY_eFXhhSzRUGtrMNmaat?usp=sharing"
      },
    ],
  },

  com: {
    name: "Communication",
    description: "Resources for COM courses",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "com192",
        name: "COM 192 - Interpreting Cinema",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/13FhzOE6h_Mnmn74PUw_QDzVTQpy1zUTZ?usp=sharing"
      },
      {
        id: "com199",
        name: "COM 199 - Image and Sound Studio",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1TvtqJzoDizktY9fwddo1Nx3hU73nJRLu?usp=sharing"
      }
    ],
  },

  des: {
    name: "Design",
    description: "Resources for DES courses",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "des211",
        name: "DES211 - Creativity and Concept in Design",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1Du24J4I7hS26ywAfd3yxpIhgFOmgw3ij?usp=sharing"
      }
    ],
  },

  eco: {
    name: "Economics",
    description: "Resources for ECO courses",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "eco101",
        name: "ECO 101 - Principles of Microeconomics",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1P86G552awhhW7RZ2J-26ua6CHkmkcedI?usp=sharing"
      },
      {
        id: "eco102",
        name: "ECO 102 - Principles of Macroeconomics",
        image: "https://images.unsplash.com/photo-1607944024060-0450380ddd33?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1WqhO95DH13_sXtsI8PLgkwuMAQ47HjGr?usp=sharing"
      },
      {
        id: "eco213",
        name: "ECO 213 - Basic Data Analysis and Econometrics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1qqsWf_ywMc8QIU2zwggizpDnUMZ6_zoq?usp=sharing"
      },
      {
        id: "eco221",
        name: "ECO 221 - Game Theory",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1xh0RfUYPyz4b01t8WvnfDoMVbjibGsyo?usp=sharing"
      },
      {
        id: "eco301",
        name: "ECO 301 - Intermediate Microeconomics",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1cYxmt6XcCLrx0hWTYl1nEBK-rJfYZggp?usp=sharing"
      },
      {
        id: "eco354",
        name: "ECO 354 - Public Economics",
        image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1xaFmbXSahlo2TmrZhqoWET0l6599Z2tB?usp=sharing"
      },
      {
        id: "mec103",
        name: "MEC 103 - Microeconomics for Business",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/14JpttYjxGLKcW6oHQhrGFHDuLMwmj2uk?usp=sharing"
      },
      {
        id: "mec104",
        name: "MEC 104 - Macroeconomics for Business",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1voMtjObNe1s4FUKApWIrYlBmBmmOJaXn?usp=sharing"
      },
    ],
  },

  sw: {
    name: "Swayam",
    description: "Resources for swayam",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "forests",
        name: "Forests",
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/18odzjGYjItX2RYfBg_SBgGg0PQqr1RmX?usp=sharing"
      },
    ],
  },

  eng: {
    name: "English",
    description: "Resources for ENG courses",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "eng243",
        name: "ENG243",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1GZLcIei3kiQ8P8gYN033mwk3hvghV1fj?usp=sharing"
      }
    ],
  },

  ece: {
    name: "Electrical Engineering",
    description: "Resources for ECE and EED courses",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e",
    courses: [
      {
        id: "ece103",
        name: "ECE103 - Digital Electronics",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
        driveLink: "https://drive.google.com/drive/folders/1VQGbNDUYKw29b91qQ01f79HG2MbNpddx?usp=sharing"
      },
      {
        id: "ece201",
        name: "ECE201 - Power Systems",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        driveLink: "https://drive.google.com/drive/folders/19l0m5UgR31GbtFwgWzQwkTzRIhDugDAM?usp=sharing"
      },
      {
        id: "ece202",
        name: "ECE202 - Embedded Systems",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        driveLink: "https://drive.google.com/drive/folders/1EqVXgbOz4hyKJ2FdqriTcO0V9jWfF6tv?usp=sharing"
      },
      {
        id: "ece203",
        name: "ECE203 - Signals and Systems",
        image: "https://images.unsplash.com/photo-1516031190212-da133013de50",
        driveLink: "https://drive.google.com/drive/folders/1pklttNe60ahG4vGI-6HWjau7y6P6tDtC?usp=sharing"
      },
      {
        id: "ece204",
        name: "ECE204",
        image: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71",
        driveLink: "https://drive.google.com/drive/folders/1qMMagKDpBAYFRkD5vYzGrKEhxzVWIMds?usp=sharing"
      },
      {
        id: "ece205",
        name: "ECE205",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        driveLink: "https://drive.google.com/drive/folders/1a87k2WDZB9tdMWasnxmhOzNRR5KK8UIY?usp=sharing"
      },
      {
        id: "ece206",
        name: "ECE206",
        image: "https://images.unsplash.com/photo-1580584126903-c17d41830450",
        driveLink: "https://drive.google.com/drive/folders/1ARjANsV5vhqfWLKkhZhYOBIQU4rLvwz7?usp=sharing"
      },
      {
        id: "ece207",
        name: "ECE207",
        image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80",
        driveLink: "https://drive.google.com/drive/folders/1PxHANDkZ1knVihU2l914KNWW33v47JG3?usp=sharing"
      },
      {
        id: "eed101",
        name: "EED 101 - Introduction to Electrical Engineering",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
        driveLink: "https://drive.google.com/drive/folders/1XVL6u7A489yk5oTPn_qWcbigrCIf-KdL?usp=sharing"
      },
      {
        id: "eed201",
        name: "EED 201 - Signals and Systems",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        driveLink: "https://drive.google.com/drive/folders/1BshISpRTCXSoeNzeuhZzlFMltAJYd-C1?usp=sharing"
      },
      {
        id: "eed206",
        name: "EED 206 - Digital Electronics",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80",
        driveLink: "https://drive.google.com/drive/folders/1Ie4yyX9VL8B951khU66ikhkdhFcIG2zd?usp=sharing"
      },  
    ],
  },

  phy: {
    name: "Physics",
    description: "Resources for PHY courses",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "phy101",
        name: "PHY101 - Introduction to Physics I",
        image: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1dOwfJy200tsIJtnl2mw_N9ym55eoQaDX?usp=sharing"
      },
      {
        id: "phy102",
        name: "PHY102 - Introduction to Physics II",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1sISLapCZVGWqgagCCdru2F7YlNDyturb?usp=sharing"
      }
    ],
  },

  mat: {
    name: "Mathematics",
    description: "Resources for MAT courses",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "mat103",
        name: "MAT103 - Mathematical Methods I",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1kN_hKzo4mxW4OpkzIgpxzEUWonji_hSX?usp=sharing"
      },
      {
        id: "mat104",
        name: "MAT104 - Mathematical Methods II",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/11bgKqbZKd3Igh5nluNCfgdr0dTEbscXe?usp=sharing"
      },
      {
        id: "mat205",
        name: "MAT205 - Probability",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1CM4CNHu9Q5x-uixhAG5dYq1xcMURL1jk?usp=sharing"
      }
    ],
  },

  mech: {
    name: "Mechanical Engineering",
    description: "Materials for MED courses",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "med201",
        name: "MED201 - Material Science and Engineering",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1HOAlRjwd-HTXOacwCunXyTzOvMC2ChMi?usp=sharing"
      }
    ],
  },
  
  fac: {
    name: "Finance, Accounting and Control",
    description: "Resources for FAC courses",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "fac102",
        name: "FAC 102 - Introduction to Financial Accounting",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1uSgXBrPbkbLcQqPvZtNl4mgKFJ55FKqB?usp=sharing"
      },
      {
        id: "fac202",
        name: "FAC 202 - Financial Management",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1BAX2pbKsrzXA3o7trwCc6npB65KtVD21?usp=sharing"
      },
      {
        id: "fac203",
        name: "FAC 203 - Managerial Accounting",
        image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1GoDzXJ1IWDwyalzJVyfDJMOHkNziZKcs?usp=sharing"
      }
    ],
  },
  ccc: {
    name: "CCC",
    description: "Resources for CCCs",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "ccc230",
        name: "CCC 230 - Graphic Novels and World Politics",
        image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1c7-KvcWg1PVeOZ9WKCu4q3PckDDhN6um?usp=sharing"
      },
      {
        id: "ccc335",
        name: "CCC 335 - Knowing Contemporary China",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1Q2f2TkEQmAYu4S-yyag46CRF7EfbpByp?usp=sharing"
      },
      {
        id: "ccc402",
        name: "CCC 402 - Genetic Engineering",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1cb-YPHpRu9SXyZiz8EafLrPMqKeae2Tt?usp=sharing"
      },
      {
        id: "ccc407",
        name: "CCC 407 - Chemistry in our Lives",
        image: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/16OYH_Z3ZByL7MeX1AFG2sQ2UsvZEG_WV?usp=sharing"
      },
      {
        id: "ccc419",
        name: "CCC 419 - Cancer",
        image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1EnG3Qe8yfdWo312pNwyK07UYfZKigJJg?usp=sharing"
      },
      {
        id: "ccc441",
        name: "CCC 441 - General Biochemistry",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1QJM_kCf0NrHip6pqHaqfvGG905HMSXFU?usp=sharing"
      },
      {
        id: "ccc506",
        name: "CCC 506 - Scientific Reasoning and Awareness",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1gvQ7hna5Dz4qRXdSmcjqZAL1qtDi8IPB?usp=sharing"
      },
      {
        id: "ccc510",
        name: "CCC 510 - Creativity and Concept in Design",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/17exLidpgHknE6swCaj3ZPhpBY4o352rK?usp=sharing"
      },
      {
        id: "ccc608",
        name: "CCC 608 - Technology and Society",
        image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1X40NuZxlr8LIPPZSRHeFy1UHg-1xrjVS?usp=sharing"
      },
      {
        id: "ccc624",
        name: "CCC 624 - Uses of Energy",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1FIONuYj2l-gQeFupfJ-_uTvoB8KbaQut?usp=sharing"
      },
      {
        id: "ccc628",
        name: "CCC 628 - A Hitchhiker's Guide to Futuristic Technology",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1ltqmmiXLXnYqiiYK0ALeqNPcZPMbmR_R?usp=sharing"
      },
      {
        id: "ccc629",
        name: "CCC 629 - Computer Corpus Linguistics - Annotation and Analysis",
        image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1IBM9aze_RT0cD85C68HV5PLu7YDh_q4W?usp=sharing"
      },
      {
        id: "ccc634",
        name: "CCC 634 - A Gentle Introduction to Python",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1_btbfDS-9YGFCTFSkmBvKi90TTMT1vSI?usp=sharing"
      },
      
      {
        id: "ccc642",
        name: "CCC 642 - Urban Transportation",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop", // City transportation/transit system image
          driveLink: "https://drive.google.com/drive/folders/1IngqtM6JPuni_RTFFnWuk2N9bHuPs_TO?usp=sharing"
      },
      {
        id: "ccc645",
        name: "CCC 645 - Mobile Systems in 21st century",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", // Mobile devices/systems image
          driveLink: "https://drive.google.com/drive/folders/1_nR9KVo1BNk5z1KWQy85rDeOKi4Lr-Vx?usp=sharing"
      },
     
      {
        id: "ccc651",
        name: "CCC 651 - Global Economy",
        image: "https://images.unsplash.com/photo-1607944024060-0450380ddd33?q=80&w=1000&auto=format&fit=crop", // Global economy/world finance image
        driveLink: "https://drive.google.com/drive/folders/1o4Z4b0qA2EEpsrKz6RX7v92fdSUQsZ5_?usp=sharing"
      },
      {
        id: "ccc704a",
        name: "CCC 704 - Environmental Studies",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop", // Natural environment/landscape image
        driveLink: "https://drive.google.com/drive/folders/1f5Wx-u52Qa1bSCkJU9glIn-Wglmthptb?usp=sharing"
      },
     {
  id: "ccc704b",
  name: "CCC 704 - Genetic Engineering",
  image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop", // DNA/genetic research image
  driveLink: "https://drive.google.com/drive/folders/1jAqinDTyHQbibs0rYQ1S5AkgMg7FjYae?usp=sharing"
},
      {
        id: "ccc805a",
        name: "CCC 805 - Introduction to MS Excel",
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1000&auto=format&fit=crop", // Excel spreadsheet image
        driveLink: "https://drive.google.com/drive/folders/1mBhH6HsQplFD74ip-oZPq0SIkN4loiwy?usp=sharing"
      },
      {
        id: "ccc806",
        name: "CCC 806 - Data Analysis using Spreadsheets",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop", // Data analysis/charts image
        driveLink: "https://drive.google.com/drive/folders/1uqF_tosZ18PUHbUhwhDN2oEF7EWDcUHs?usp=sharing"
      },
      {
        id: "ccc821",
        name: "CCC 821 - Algorithmic Thinking",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1000&auto=format&fit=crop", // Algorithm/flowchart concept image
        driveLink: "https://drive.google.com/drive/folders/1TpiXQ7McnbtbPRE1EZzQHzoZNI5dIdIL?usp=sharing"
      },
      {
        id: "ccc830",
        name: "CCC 830 - Optimisation using Linear and Non-Linear Programming",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1000&auto=format&fit=crop", // Mathematical optimization/graphs image
        driveLink: "https://drive.google.com/drive/folders/1zZ9wWazYIRf4aqarnQGvQyEGe7y6O9T0?usp=sharing"
      },
      {
        id: "ccc832",
        name: "CCC 832 - Venture Capital Contracts - a workshop course",
        image: "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=1000&auto=format&fit=crop", // Business meeting/contract signing image
        driveLink: "https://drive.google.com/drive/folders/1ZdOHjnjglgS0Q_sINgxKmLP18ij8PP5_?usp=sharing"
      },
      {
        id: "ccc839",
        name: "CCC 839 - Global Securities Markets",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", // Stock market/trading floor image
        driveLink: "https://drive.google.com/drive/folders/1OC_MFq83FBZP-v-yQMu8fEuLKuk64MNH?usp=sharing"
      },
      {
        id: "ccc805b",
        name: "CCC 805 - Analysis and Business Modelling Using Excel",
        image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop", // Business analytics/modeling image
        driveLink: "https://drive.google.com/drive/folders/1KmKdvIYybawtubgjQSH1NpsbHEZLY2mk?usp=sharing"
      }
    ],
},
  
  bms: {
    name: "Business Management Studies",
    description: "Resources for MGT, MKT, DOM, OHM, STM, ISM courses",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    courses: [
      {
        id: "mgt102",
        name: "MGT 102 - Analysis, Presentation & Report Writing",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1ZkE86zpOXMQpKNePBvM-PVyM8NNp21KI?usp=sharing"
      },
      {
        id: "mgt201",
        name: "MGT 201 - Business Law",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1SaiG9IVbryUZiPeGv68We0LgiH8Xwh2h?usp=sharing"
      },
      {
        id: "mgt204",
        name: "MGT 204 - TVL Foundation Course",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1M6THgi9x8Ql6qfEb3j9nU9pBrEMt1qKG?usp=sharing"
      },
      {
        id: "mkt202",
        name: "MKT 202 - Introduction to Marketing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1m49DAsVECbfag1uK2hkFDjADoqmS-PBc?usp=sharing"
      },
      {
        id: "ohm103",
        name: "OHM 103 - Organizational Behaviour",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1UGLG--6OTsQMD32XKfhN3HL6FNp3ez1P?usp=sharing"
      },

{
        id: "dom105",
        name: "DOM 105 - Quantitative Techniques for Business II",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1Z30Z0IcVautvX7QyFM7LIwm8ZyMzjySd?usp=sharing"
      },
      {
        id: "dom403",
        name: "DOM 403 - Sustainable Operations Management",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1K_IqDn7rlkwbpheYkOSwoGIJub3E-XBf?usp=sharing"
      },
      {
        id: "dom104",
        name: "DOM104 - Quantitative Techniques for Business I",
        image: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1iZp0BMmnOy0Rxy6jxELuHvUdh3ScsS9r?usp=sharing"
      },
      {
        id: "stm103",
        name: "STM 103 - From Creativity to Innovation Management",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1k1bTv7QWjrevSF4rmSJ1OMpY_-lhwjhz?usp=sharing"
      },
      {
        id: "ism101",
        name: "ISM 101 - Information Systems Management",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
        driveLink: "https://drive.google.com/drive/folders/1zl0pT8G33BLJRGzHWYMZX2mvL6YmSLhm?usp=sharing"
      }
    ],
  },
}

// ✅ CORRECTED VERSION:
export default async function DepartmentPage({ params }) {
  const resolvedParams = await params;
  const department = departmentsData[resolvedParams.department];

  if (!department) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="rounded-lg overflow-hidden mb-6">
            <Image
              src={department.image || "/placeholder.svg"}
              alt={department.name}
              width={800}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{department.name}</h1>
          <p className="text-xl text-muted-foreground">{department.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {department.courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.name}
                  width={300}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>Course ID: {course.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>Course materials available</span>
                </div>
              </CardContent>
              <CardFooter>
                <a href={course.driveLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Course Materials
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/departments">
            <Button variant="outline">Back to All Departments</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}