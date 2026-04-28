import React, { useState, useMemo } from "react";
import {
  Coins,
  Gift,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Sparkles,
  Trophy,
  BookOpen,
} from "lucide-react";

// --- DATA STRUCTURE ---
const quizData = [
  {
    id: "phonetics",
    title: "I. PHONETICS",
    groups: [
      {
        instruction:
          "Choose one word whose underlined part is pronounced differently. Identify your answer by circling the corresponding letter A, B, C, or D.",
        passage: null,
        questions: [
          {
            id: 1,
            type: "mcq",
            text: "1.",
            options: [
              { id: "A", text: "<u>u</u>mbrella" },
              { id: "B", text: "s<u>u</u>nshine" },
              { id: "C", text: "sw<u>u</u>ng" },
              { id: "D", text: "<u>u</u>nion" },
            ],
            correct: "D",
          },
          {
            id: 2,
            type: "mcq",
            text: "2.",
            options: [
              { id: "A", text: "stopp<u>ed</u>" },
              { id: "B", text: "need<u>ed</u>" },
              { id: "C", text: "sack<u>ed</u>" },
              { id: "D", text: "miss<u>ed</u>" },
            ],
            correct: "B",
          },
          {
            id: 3,
            type: "mcq",
            text: "3.",
            options: [
              { id: "A", text: "need<u>ed</u>" },
              { id: "B", text: "want<u>ed</u>" },
              { id: "C", text: "nak<u>ed</u>" },
              { id: "D", text: "stress<u>ed</u>" },
            ],
            correct: "D",
          },
          {
            id: 4,
            type: "mcq",
            text: "4.",
            options: [
              { id: "A", text: "threat<u>e</u>n" },
              { id: "B", text: "b<u>ea</u>m" },
              { id: "C", text: "h<u>ea</u>l" },
              { id: "D", text: "p<u>ea</u>ch" },
            ],
            correct: "A",
          },
          {
            id: 5,
            type: "mcq",
            text: "5.",
            options: [
              { id: "A", text: "h<u>ea</u>r" },
              { id: "B", text: "d<u>ea</u>r" },
              { id: "C", text: "p<u>ea</u>r" },
              { id: "D", text: "cl<u>ea</u>r" },
            ],
            correct: "C",
          },
        ],
      },
    ],
  },
  {
    id: "vocabulary",
    title: "II. VOCABULARY AND GRAMMAR",
    groups: [
      {
        instruction:
          "Choose from the four options given (marked A, B, C, and D) one best answer to complete each sentence.",
        passage: null,
        questions: [
          {
            id: 6,
            type: "mcq",
            text: "6. She ___ to spend her vacation in Hawaii.",
            options: [
              { id: "A", text: "not going" },
              { id: "B", text: "will not going" },
              { id: "C", text: "isn't not going" },
              { id: "D", text: "is not going" },
            ],
            correct: "D",
          },
          {
            id: 7,
            type: "mcq",
            text: "7. Who looks ___ your children when you are away from home?",
            options: [
              { id: "A", text: "for" },
              { id: "B", text: "at" },
              { id: "C", text: "after" },
              { id: "D", text: "to" },
            ],
            correct: "C",
          },
          {
            id: 8,
            type: "mcq",
            text: "8. Please, turn off the radio. I ___ my homework now.",
            options: [
              { id: "A", text: "am going to do" },
              { id: "B", text: "doing" },
              { id: "C", text: "am doing" },
              { id: "D", text: "do" },
            ],
            correct: "C",
          },
          {
            id: 9,
            type: "mcq",
            text: '9. The movie "Zenith" is going to win ___',
            options: [
              { id: "A", text: "several Academy Awards" },
              { id: "B", text: "some Academy Award" },
              { id: "C", text: "several Academical Award" },
              { id: "D", text: "several Academical Awards." },
            ],
            correct: "A",
          },
          {
            id: 10,
            type: "mcq",
            text: "10. The film was ___ and he came very rich.",
            options: [
              { id: "A", text: "succeed" },
              { id: "B", text: "success" },
              { id: "C", text: "successful" },
              { id: "D", text: "successive" },
            ],
            correct: "C",
          },
          {
            id: 11,
            type: "mcq",
            text: "11. After coming home, she cleaned the floor ___ cooked dinner.",
            options: [
              { id: "A", text: "but" },
              { id: "B", text: "however" },
              { id: "C", text: "moreover" },
              { id: "D", text: "and" },
            ],
            correct: "D",
          },
          {
            id: 12,
            type: "mcq",
            text: "12. They had a very happy ___",
            options: [
              { id: "A", text: "marry" },
              { id: "B", text: "marriage" },
              { id: "C", text: "married" },
              { id: "D", text: "marrying" },
            ],
            correct: "B",
          },
          {
            id: 13,
            type: "mcq",
            text: "13. Sally is going ___ a beautiful dinner tonight.",
            options: [
              { id: "A", text: "to make" },
              { id: "B", text: "to do" },
              { id: "C", text: "make" },
              { id: "D", text: "to be making" },
            ],
            correct: "A",
          },
          {
            id: 14,
            type: "mcq",
            text: "14. On weekends, Mary likes to ___ with her husband and children.",
            options: [
              { id: "A", text: "have trouble" },
              { id: "B", text: "stay awake" },
              { id: "C", text: "spend time" },
              { id: "D", text: "argue" },
            ],
            correct: "C",
          },
          {
            id: 15,
            type: "mcq",
            text: "15. She worships the sun and ___ she always spends her holidays in Greece.",
            options: [
              { id: "A", text: "nevertheless" },
              { id: "B", text: "yet" },
              { id: "C", text: "accordingly" },
              { id: "D", text: "however" },
            ],
            correct: "C",
          },
          {
            id: 16,
            type: "mcq",
            text: "16. In the lecture, the professor mentioned ___ to Africa to collect a rare species of butterfly.",
            options: [
              { id: "A", text: "travel" },
              { id: "B", text: "to travel" },
              { id: "C", text: "to traveling" },
              { id: "D", text: "traveling" },
            ],
            correct: "D",
          },
          {
            id: 17,
            type: "mcq",
            text: "17. We ___ him a pen for his birthday.",
            options: [
              { id: "A", text: "buy" },
              { id: "B", text: "buying" },
              { id: "C", text: "are going to buy" },
              { id: "D", text: "going to buy" },
            ],
            correct: "C",
          },
          {
            id: 18,
            type: "mcq",
            text: "18. I have just bought some paint, I ___ this room.",
            options: [
              { id: "A", text: "repaint" },
              { id: "B", text: "repainting" },
              { id: "C", text: "am going to repaint" },
              { id: "D", text: "will repaint" },
            ],
            correct: "C",
          },
          {
            id: 19,
            type: "mcq",
            text: "19. It was raining ___ they cancelled the trip to the beach.",
            options: [
              { id: "A", text: "although" },
              { id: "B", text: "because" },
              { id: "C", text: "so" },
              { id: "D", text: "when" },
            ],
            correct: "C",
          },
          {
            id: 20,
            type: "mcq",
            text: "20. They had never come ___ such a beautiful little village before.",
            options: [
              { id: "A", text: "at" },
              { id: "B", text: "across" },
              { id: "C", text: "off" },
              { id: "D", text: "along" },
            ],
            correct: "B",
          },
        ],
      },
    ],
  },
  {
    id: "reading",
    title: "III. READING",
    groups: [
      {
        instruction:
          "1. Read the passage and choose the best answer A, B, C or D.",
        passage:
          "Before you travel to the US, you (21)_________ find out what documents you need. British people do not (22)_______ to get a visa, but there are different rules for (23) __________ nationalities. (24)_______ example, you don’t need to show that you have enough money (25)_______you. (26)_______ there is one rule you can be sure about: everyone (27)_______ to show their passport.\n\nThe roads in New York are very busy, but don't worry you can get around cheaply and easily by subway. Remember that you are not allowed to smoke (28) ___ public transport or in shops. And don't forget that you must tip taxi drivers and waiters. New York is not the most dangerous city in the US, but you really (29) ___ walk along empty streets at night. And it is (30) ___ to travel around in groups.",
        questions: [
          {
            id: 21,
            type: "mcq",
            text: "21.",
            options: [
              { id: "A", text: "must" },
              { id: "B", text: "would" },
              { id: "C", text: "can" },
              { id: "D", text: "could" },
            ],
            correct: "A",
          },
          {
            id: 22,
            type: "mcq",
            text: "22.",
            options: [
              { id: "A", text: "ought" },
              { id: "B", text: "have" },
              { id: "C", text: "should" },
              { id: "D", text: "used" },
            ],
            correct: "B",
          },
          {
            id: 23,
            type: "mcq",
            text: "23.",
            options: [
              { id: "A", text: "other" },
              { id: "B", text: "many" },
              { id: "C", text: "different" },
              { id: "D", text: "some" },
            ],
            correct: "C",
          },
          {
            id: 24,
            type: "mcq",
            text: "24.",
            options: [
              { id: "A", text: "In" },
              { id: "B", text: "On" },
              { id: "C", text: "For" },
              { id: "D", text: "At" },
            ],
            correct: "C",
          },
          {
            id: 25,
            type: "mcq",
            text: "25.",
            options: [
              { id: "A", text: "on" },
              { id: "B", text: "in" },
              { id: "C", text: "of" },
              { id: "D", text: "with" },
            ],
            correct: "D",
          },
          {
            id: 26,
            type: "mcq",
            text: "26.",
            options: [
              { id: "A", text: "But" },
              { id: "B", text: "Then" },
              { id: "C", text: "Now" },
              { id: "D", text: "And" },
            ],
            correct: "A",
          },
          {
            id: 27,
            type: "mcq",
            text: "27.",
            options: [
              { id: "A", text: "could" },
              { id: "B", text: "must" },
              { id: "C", text: "has" },
              { id: "D", text: "should" },
            ],
            correct: "C",
          },
          {
            id: 28,
            type: "mcq",
            text: "28.",
            options: [
              { id: "A", text: "in" },
              { id: "B", text: "on" },
              { id: "C", text: "at" },
              { id: "D", text: "by" },
            ],
            correct: "B",
          },
          {
            id: 29,
            type: "mcq",
            text: "29.",
            options: [
              { id: "A", text: "shouldn't" },
              { id: "B", text: "couldn't" },
              { id: "C", text: "wouldn't" },
              { id: "D", text: "might not" },
            ],
            correct: "A",
          },
          {
            id: 30,
            type: "mcq",
            text: "30.",
            options: [
              { id: "A", text: "safe" },
              { id: "B", text: "safer" },
              { id: "C", text: "safest" },
              { id: "D", text: "more safe" },
            ],
            correct: "B",
          },
        ],
      },
      {
        instruction:
          "2. Read the passage and choose the best answer A, B, C or D to each of the following questions.",
        passage:
          "Mrs. Van: Hello. This is Sai Gon Tourist Company.\nMrs. Lan: Hello. Could I speak to Mr. Thinh, please?\nMrs. Van: I am afraid he is out right now. Would you like to leave him a message?\nMrs. Lan: Yes. I am Mrs. Lan. I want to have a trip to Singapore on June 28. According to the schedule, I will come back on June 31. Can you tell him to call me after 9.00 am?\nMrs. Van: What is your telephone number?\nMrs. Lan: 098 2525252.\nMrs. Van: Ok, Mrs. Lan. I will tell him when he is back. Bye.\nMrs. Lan: Thank you very much. Bye.",
        questions: [
          {
            id: 31,
            type: "mcq",
            text: "31. Who are talking on the phone?",
            options: [
              { id: "A", text: "Mrs. Van and Mr. Thinh" },
              { id: "B", text: "Mrs. Lan and Mr. Thinh" },
              { id: "C", text: "Mrs. Van and Mrs. Lan" },
              { id: "D", text: "Mrs. Van, Mr. Thinh and Mrs. Lan" },
            ],
            correct: "C",
          },
          {
            id: 32,
            type: "mcq",
            text: "32. Who took the message?",
            options: [
              { id: "A", text: "Mrs. Van" },
              { id: "B", text: "Mr. Thinh" },
              { id: "C", text: "Mrs. Lan" },
              { id: "D", text: "Sai Gon Tourist Company" },
            ],
            correct: "A",
          },
          {
            id: 33,
            type: "mcq",
            text: "33. Where does Mr. Thinh work?",
            options: [
              { id: "A", text: "He works for Sai Gon Tourist Company." },
              { id: "B", text: "He works in Singapore." },
              { id: "C", text: "He works in Hanoi." },
              { id: "D", text: "He works in a Singaporean Company." },
            ],
            correct: "A",
          },
          {
            id: 34,
            type: "mcq",
            text: "34. Where will Mrs. Van travel to?",
            options: [
              { id: "A", text: "Hanoi" },
              { id: "B", text: "Sai Gon" },
              { id: "C", text: "Singapore" },
              { id: "D", text: "Malaysia" },
            ],
            correct: "C",
          },
          {
            id: 35,
            type: "mcq",
            text: "35. When will she set off her trip?",
            options: [
              { id: "A", text: "today" },
              { id: "B", text: "June next year" },
              { id: "C", text: "31 June" },
              { id: "D", text: "28 June" },
            ],
            correct: "D",
          },
        ],
      },
    ],
  },
  {
    id: "writing",
    title: "IV. WRITING",
    groups: [
      {
        instruction:
          "1. Write the meaningful sentence using the suggested words and phrases given by choosing A, B, C or D.",
        passage: null,
        questions: [
          {
            id: 36,
            type: "mcq",
            text: "36. What / you / going / do/ when / grow up/?/",
            options: [
              { id: "A", text: "What will you going to do when you grow up?" },
              { id: "B", text: "What are you going to do when you grow up?" },
              { id: "C", text: "What do you going to do when you grow up?" },
              { id: "D", text: "What are you go to do when you grow up?" },
            ],
            correct: "B",
          },
          {
            id: 37,
            type: "mcq",
            text: "37. last/ week/ what/ never/ happen/ me/ to/ guess/ you/./",
            options: [
              {
                id: "A",
                text: "You never guess what was happened to me last week.",
              },
              {
                id: "B",
                text: "You'll never guess what had happened to me last week.",
              },
              {
                id: "C",
                text: "You'll never guess what happened to me last week.",
              },
              {
                id: "D",
                text: "You would never guess what was happening to me last week.",
              },
            ],
            correct: "C",
          },
          {
            id: 38,
            type: "mcq",
            text: "38. You like/ go/ concert/ me tonight?",
            options: [
              {
                id: "A",
                text: "Would you like to go to the concert with me tonight?",
              },
              {
                id: "B",
                text: "Do you like to go to the concert with me tonight?",
              },
              {
                id: "C",
                text: "Would you like going to the concert with me tonight?",
              },
              {
                id: "D",
                text: "Do you like going to the concert with me tonight?",
              },
            ],
            correct: "A",
          },
          {
            id: 39,
            type: "mcq",
            text: "39. I/going/take part/ my friend's party/ so/ I/ come home/ late/tonight.",
            options: [
              {
                id: "A",
                text: "I am going to take part my friend's party, so I am coming to home late tonight.",
              },
              {
                id: "B",
                text: "I am going to take part in my friend's party, so I was coming to home late tonight.",
              },
              {
                id: "C",
                text: "I was going to take part in my friend's party, so I was coming home late tonight.",
              },
              {
                id: "D",
                text: "I am going to take part in my friend's party, so I am coming home late tonight.",
              },
            ],
            correct: "D",
          },
          {
            id: 40,
            type: "mcq",
            text: "40. appointment/ make an/ doctor to/ see/ go/ the/ Hoa/ after yesterday/./",
            options: [
              {
                id: "A",
                text: "Yesterday Hoa goes to see the doctor after making an appointment.",
              },
              {
                id: "B",
                text: "Yesterday Hoa makes an appointment after going to see the doctor.",
              },
              {
                id: "C",
                text: "Yesterday Hoa went to make an appointment after seeing the doctor.",
              },
              {
                id: "D",
                text: "Yesterday Hoa went to see the doctor after making an appointment.",
              },
            ],
            correct: "D",
          },
        ],
      },
      {
        instruction:
          "2. Choose the underlined word or phrase in each sentence that needs correcting.",
        passage: null,
        questions: [
          {
            id: 41,
            type: "mcq",
            text: "41. In summer, Peter usually plays the tennis every day.",
            options: [
              { id: "A", text: "In summer" },
              { id: "B", text: "usually plays" },
              { id: "C", text: "the tennis" },
              { id: "D", text: "every day" },
            ],
            correct: "C",
          },
          {
            id: 42,
            type: "mcq",
            text: "42. Where did she find the money? - Out the room.",
            options: [
              { id: "A", text: "Where did" },
              { id: "B", text: "find" },
              { id: "C", text: "the money" },
              { id: "D", text: "Out" },
            ],
            correct: "D",
          },
          {
            id: 43,
            type: "mcq",
            text: "43. We buy two new rackets yesterday. We are going to play tennis this afternoon.",
            options: [
              { id: "A", text: "buy" },
              { id: "B", text: "yesterday" },
              { id: "C", text: "are going to" },
              { id: "D", text: "this afternoon" },
            ],
            correct: "A",
          },
          {
            id: 44,
            type: "mcq",
            text: "44. Write to me and say me all about your holiday in Nha Trang.",
            options: [
              { id: "A", text: "Write to" },
              { id: "B", text: "say" },
              { id: "C", text: "all about" },
              { id: "D", text: "in Nha Trang" },
            ],
            correct: "B",
          },
          {
            id: 45,
            type: "mcq",
            text: "45. The girls are looking at herself in the mirror.",
            options: [
              { id: "A", text: "The girls" },
              { id: "B", text: "looking" },
              { id: "C", text: "herself" },
              { id: "D", text: "the mirror" },
            ],
            correct: "C",
          },
        ],
      },
      {
        instruction: "3. Give correct preposition to complete the sentence.",
        passage: null,
        questions: [
          {
            id: 46,
            type: "text",
            text: "46. Picking up one piece of food [ ___ ] two sets of chopsticks is considered bad luck.",
            correct: ["by"],
          },
          {
            id: 47,
            type: "text",
            text: "47. If you drop a fork it means that a man is coming [ ___ ] visit.",
            correct: ["in", "to"],
          },
          {
            id: 48,
            type: "text",
            text: "48. If you drop scissors, it means that your lover is being unfaithful [ ___ ] you.",
            correct: ["at", "to"],
          },
          {
            id: 49,
            type: "text",
            text: "49. It is good luck to toss a pinch of salt [ ___ ] one shoulder.",
            correct: ["onto"],
          },
          {
            id: 50,
            type: "text",
            text: "50. If the palm [ ___ ] your right hand begins to itch, you will be getting some money.",
            correct: ["of"],
          },
        ],
      },
      {
        instruction:
          "4. Rewrite the sentence so that it has similar meaning as the first ones.",
        passage: null,
        questions: [
          {
            id: 51,
            type: "text",
            text: "51. He will learn to speak English well in only one year.",
            prefix: "It will take",
            correct: ["him only one year to learn to speak english"],
          },
          {
            id: 52,
            type: "text",
            text: "52. It is interesting to go camping with friends in the summer.",
            prefix: "Going camping",
            correct: ["with friends in the summer is interesting"],
          },
          {
            id: 53,
            type: "text",
            text: "53. I am looking forward to seeing you again.",
            prefix: "I am excited",
            correct: ["about seeing you again"],
          },
          {
            id: 54,
            type: "text",
            text: "54. Shall we go for a drink?",
            prefix: "What about",
            correct: ["going for a drink"],
          },
          {
            id: 55,
            type: "text",
            text: "55. I'm certainly not going to give you any more money.",
            prefix: "I have no",
            correct: ["intention to give you any more money"],
          },
          {
            id: 56,
            type: "text",
            text: "56. He drove so fast; that's why he caused a serious accident.",
            prefix: "He caused a",
            correct: ["serious accident because he drove so fast"],
          },
          {
            id: 57,
            type: "text",
            text: "57. Hurry up or we'll be late for the concert.",
            prefix: "If we",
            correct: [
              "hurry up, we won't be late for the concert",
              "hurry up we wont be late for the concert",
            ],
          },
          {
            id: 58,
            type: "text",
            text: "58. Let's go to the movies tonight.",
            prefix: "Would you",
            correct: ["like to go to the movies tonight"],
          },
          {
            id: 59,
            type: "text",
            text: "59. David Beckham plays soccer very well.",
            prefix: "David Beckham is",
            correct: ["a good soccer player"],
          },
          {
            id: 60,
            type: "text",
            text: "60. Jane does not play tennis as well as Tom.",
            prefix: "Tom plays",
            correct: ["tennis better than jane"],
          },
        ],
      },
    ],
  },
];

// --- UTILS ---
const normalizeText = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [scores, setScores] = useState({});
  const [coins, setCoins] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [gachaResult, setGachaResult] = useState(null);

  // Stats
  const totalCorrect = Object.values(scores).reduce((a, b) => a + b, 0);
  const totalQuestions = quizData.reduce(
    (acc, section) =>
      acc + section.groups.reduce((a, g) => a + g.questions.length, 0),
    0
  );

  const handleAnswerChange = (sectionId, questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [sectionId]: {
        ...(prev[sectionId] || {}),
        [questionId]: value,
      },
    }));
  };

  const handleSubmitSection = (sectionId) => {
    const sectionData = quizData.find((s) => s.id === sectionId);
    let correctCount = 0;
    const userSectionAnswers = answers[sectionId] || {};

    sectionData.groups.forEach((group) => {
      group.questions.forEach((q) => {
        const userAnswer = userSectionAnswers[q.id];
        if (q.type === "mcq") {
          if (userAnswer === q.correct) correctCount++;
        } else if (q.type === "text") {
          const normalizedUser = normalizeText(userAnswer);
          const isMatch = q.correct.some(
            (ans) => normalizeText(ans) === normalizedUser
          );
          if (isMatch) correctCount++;
        }
      });
    });

    setScores((prev) => ({ ...prev, [sectionId]: correctCount }));
    setSubmitted((prev) => ({ ...prev, [sectionId]: true }));
    setCoins((prev) => prev + correctCount * 10);
    setActiveTab("dashboard");
  };

  const handleGachaRoll = () => {
    if (coins < 100) return;
    setCoins((prev) => prev - 100);

    const rand = Math.random();
    let prize = "";
    if (rand < 0.1) prize = "🏎️ Siêu xe Lamborghini";
    else if (rand < 0.4) prize = "💻 Máy tính Legendary";
    else prize = "📱 Điện thoại đời mới";

    setInventory((prev) => [prize, ...prev]);
    setGachaResult(prize);
    setTimeout(() => setGachaResult(null), 3500);
  };

  const renderDashboard = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Hello, English Master! ✨
          </h1>
          <p className="text-slate-500 mt-1">
            Làm bài tập để kiếm xu mở quà nhé.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full font-bold shadow-sm border border-yellow-100">
            <Coins className="w-5 h-5" />
            {coins} Xu
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizData.map((section) => {
          const isSubmitted = submitted[section.id];
          const totalQ = section.groups.reduce(
            (a, g) => a + g.questions.length,
            0
          );
          const score = scores[section.id] || 0;

          return (
            <div
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`p-6 rounded-3xl border-2 transition-all cursor-pointer group ${
                isSubmitted
                  ? "border-green-200 bg-green-50"
                  : "border-pink-100 bg-white hover:border-pink-300 hover:shadow-md"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-pink-100 text-pink-500 rounded-2xl group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                {isSubmitted && (
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Hoàn thành
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                {section.title}
              </h2>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-slate-500">{totalQ} câu hỏi</span>
                {isSubmitted && (
                  <span className="text-green-600">
                    {score}/{totalQ} đúng
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-3xl border border-indigo-100 shadow-sm relative overflow-hidden">
        <Sparkles className="absolute top-4 right-4 text-indigo-200 w-16 h-16 opacity-50" />
        <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <Gift className="w-6 h-6" /> Gacha Shop Sinh Tử
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 text-center bg-white p-6 rounded-2xl border border-indigo-50 shadow-sm w-full">
            <div className="text-slate-500 mb-4 font-medium">
              100 Xu / Lượt Mở Quà
            </div>
            <button
              onClick={handleGachaRoll}
              disabled={coins < 100}
              className={`w-full py-3 px-6 rounded-xl font-bold transition-all flex justify-center items-center gap-2
                ${
                  coins >= 100
                    ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
            >
              <Gift className="w-5 h-5" /> Mở Hộp Quà Bí Ẩn
            </button>
          </div>

          <div className="flex-1 w-full bg-white p-6 rounded-2xl border border-indigo-50 shadow-sm min-h-[140px]">
            <h3 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">
              Kho Đồ Của Bạn
            </h3>
            {inventory.length === 0 ? (
              <div className="text-slate-400 text-sm text-center py-4">
                Chưa có món đồ nào. Hãy làm bài để kiếm xu nhé!
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 max-h-[100px] overflow-y-auto">
                {inventory.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium animate-in slide-in-from-bottom-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {gachaResult && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 animate-in fade-in">
            <div className="bg-white p-8 rounded-3xl text-center transform animate-in zoom-in-50 duration-300">
              <div className="text-5xl mb-4 animate-bounce">
                {gachaResult.split(" ")[0]}
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Chúc mừng bạn nhận được
              </h3>
              <p className="text-2xl font-black text-indigo-600 mt-2">
                {gachaResult.replace(/[^a-zA-ZÀ-ỹ\s]/g, "")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderSection = () => {
    const sectionData = quizData.find((s) => s.id === activeTab);
    const isSubmitted = submitted[activeTab];
    const userSectionAnswers = answers[activeTab] || {};

    return (
      <div className="max-w-4xl mx-auto animate-in slide-in-from-right-8 duration-300">
        <button
          onClick={() => setActiveTab("dashboard")}
          className="flex items-center gap-2 text-slate-500 hover:text-pink-500 transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Quay lại Dashboard
        </button>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-pink-100">
          <h1 className="text-3xl font-bold text-slate-800 border-b border-slate-100 pb-6 mb-8">
            {sectionData.title}
          </h1>

          {sectionData.groups.map((group, gIdx) => (
            <div key={gIdx} className="mb-12">
              {group.instruction && (
                <div className="text-slate-600 font-medium mb-6 italic">
                  {group.instruction}
                </div>
              )}

              {group.passage && (
                <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-200 text-slate-700 leading-relaxed whitespace-pre-wrap font-serif">
                  {group.passage}
                </div>
              )}

              <div className="space-y-8">
                {group.questions.map((q) => {
                  const userAnswer = userSectionAnswers[q.id] || "";

                  let isCorrect = false;
                  if (isSubmitted) {
                    if (q.type === "mcq") isCorrect = userAnswer === q.correct;
                    if (q.type === "text") {
                      const normalizedUser = normalizeText(userAnswer);
                      isCorrect = q.correct.some(
                        (ans) => normalizeText(ans) === normalizedUser
                      );
                    }
                  }

                  return (
                    <div
                      key={q.id}
                      className={`p-6 rounded-2xl transition-colors ${
                        isSubmitted
                          ? isCorrect
                            ? "bg-green-50/50"
                            : "bg-red-50/50"
                          : "hover:bg-slate-50 border border-transparent hover:border-slate-100"
                      }`}
                    >
                      <div className="font-bold text-slate-800 mb-4 flex gap-2">
                        {isSubmitted &&
                          (isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                          ))}
                        <span dangerouslySetInnerHTML={{ __html: q.text }} />
                      </div>

                      {q.type === "mcq" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 md:pl-7">
                          {q.options.map((opt) => (
                            <div
                              key={opt.id}
                              onClick={() =>
                                !isSubmitted &&
                                handleAnswerChange(sectionData.id, q.id, opt.id)
                              }
                              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all
                                ${
                                  userAnswer === opt.id
                                    ? "border-pink-400 bg-pink-50 text-pink-700"
                                    : "border-slate-200 hover:border-pink-200"
                                }
                                ${
                                  isSubmitted && q.correct === opt.id
                                    ? "!border-green-500 !bg-green-100 !text-green-800 font-bold"
                                    : ""
                                }
                                ${
                                  isSubmitted &&
                                  userAnswer === opt.id &&
                                  userAnswer !== q.correct
                                    ? "!border-red-400 !bg-red-50"
                                    : ""
                                }
                                ${isSubmitted ? "pointer-events-none" : ""}
                              `}
                            >
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                ${
                                  userAnswer === opt.id
                                    ? "border-pink-500"
                                    : "border-slate-300"
                                }
                                ${
                                  isSubmitted && q.correct === opt.id
                                    ? "!border-green-600"
                                    : ""
                                }
                              `}
                              >
                                {userAnswer === opt.id && (
                                  <div
                                    className={`w-2.5 h-2.5 rounded-full ${
                                      isSubmitted && q.correct === opt.id
                                        ? "bg-green-600"
                                        : "bg-pink-500"
                                    }`}
                                  />
                                )}
                              </div>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: `${opt.id}. ${opt.text.replace(
                                    /^[A-D]\.\s*/,
                                    ""
                                  )}`,
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {q.type === "text" && (
                        <div className="pl-0 md:pl-7 flex flex-wrap items-center gap-2">
                          {q.prefix && (
                            <span className="font-medium text-slate-700">
                              {q.prefix}
                            </span>
                          )}
                          <input
                            type="text"
                            disabled={isSubmitted}
                            value={userAnswer}
                            onChange={(e) =>
                              handleAnswerChange(
                                sectionData.id,
                                q.id,
                                e.target.value
                              )
                            }
                            placeholder="Nhập đáp án của bạn..."
                            className={`flex-1 min-w-[200px] border-b-2 bg-transparent px-2 py-1 outline-none transition-colors
                              ${
                                isSubmitted
                                  ? isCorrect
                                    ? "border-green-500 text-green-700"
                                    : "border-red-400 text-red-600"
                                  : "border-slate-300 focus:border-pink-400 text-slate-800"
                              }
                            `}
                          />
                        </div>
                      )}

                      {isSubmitted && !isCorrect && q.type === "text" && (
                        <div className="pl-0 md:pl-7 mt-3 text-sm text-green-600 font-medium bg-green-50 p-3 rounded-lg border border-green-100">
                          Đáp án đúng: {q.prefix ? `${q.prefix} ` : ""}
                          <span className="font-bold">{q.correct[0]}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {!isSubmitted ? (
            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => handleSubmitSection(sectionData.id)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" /> Nộp Bài Phần Này
              </button>
            </div>
          ) : (
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col items-center gap-4 bg-slate-50 p-6 rounded-2xl">
              <div className="text-2xl font-bold text-slate-800">
                Điểm của bạn:{" "}
                <span className="text-pink-500">
                  {scores[sectionData.id]} /{" "}
                  {sectionData.groups.reduce(
                    (a, g) => a + g.questions.length,
                    0
                  )}
                </span>
              </div>
              <p className="text-slate-500">
                Bạn đã nhận được {scores[sectionData.id] * 10} Xu cho phần này!
              </p>
              <button
                onClick={() => setActiveTab("dashboard")}
                className="mt-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Về Dashboard Mở Quà
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-pink-50 text-slate-800 font-sans p-4 md:p-8 selection:bg-pink-200">
      {activeTab === "dashboard" ? renderDashboard() : renderSection()}
    </div>
  );
}
