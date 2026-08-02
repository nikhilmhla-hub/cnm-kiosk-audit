export interface Option {
  label: string;
  labelHi?: string;
  points: number;
  description?: string;
  descriptionHi?: string;
}

export interface Question {
  id: string;
  category: string;
  text: string;
  textHi?: string;
  description?: string;
  descriptionHi?: string;
  helperText?: string;
  helperTextHi?: string;
  options: Option[];
}

export const questions: Question[] = [
  // FOCUS (q1 - q4)
  {
    id: "q1",
    category: "Focus",
    text: "How often do you check your phone during study sessions?",
    textHi: "पढ़ाई के दौरान आप कितनी बार फोन चेक करते हैं?",
    options: [
      { label: "Almost Never", labelHi: "लगभग कभी नहीं", points: 10 },
      { label: "1–2 Times", labelHi: "1–2 बार", points: 7 },
      { label: "3–5 Times", labelHi: "3–5 बार", points: 4 },
      { label: "Constantly", labelHi: "हर थोड़ी देर में", points: 0 }
    ]
  },
  {
    id: "q2",
    category: "Focus",
    text: "Can you study continuously for 90 minutes without distraction?",
    textHi: "क्या आप बिना ध्यान भटके लगातार 90 मिनट पढ़ाई कर सकते हैं?",
    options: [
      { label: "Easily", labelHi: "आसानी से", points: 10 },
      { label: "Most Days", labelHi: "ज़्यादातर दिनों में", points: 7 },
      { label: "Rarely", labelHi: "शायद ही कभी", points: 3 },
      { label: "Never", labelHi: "कभी नहीं", points: 0 }
    ]
  },
  {
    id: "q3",
    category: "Focus",
    text: "How often does your mind wander while studying?",
    textHi: "पढ़ाई करते समय आपका ध्यान कितनी बार भटकता है?",
    options: [
      { label: "Almost Never", labelHi: "लगभग कभी नहीं", points: 10 },
      { label: "Rarely", labelHi: "शायद ही कभी", points: 7 },
      { label: "Sometimes", labelHi: "कभी-कभी", points: 5 },
      { label: "Frequently", labelHi: "अक्सर", points: 2 },
      { label: "Constantly", labelHi: "हमेशा भटकता रहता है", points: 0 }
    ]
  },
  {
    id: "q4",
    category: "Focus",
    text: "When you sit to study, how long does it take before real studying starts?",
    textHi: "पढ़ने बैठने के बाद असल पढ़ाई शुरू होने में कितना टाइम लगता है?",
    options: [
      { label: "Immediately", labelHi: "तुरंत", points: 10 },
      { label: "5–10 Minutes", labelHi: "5–10 मिनट", points: 7 },
      { label: "10–20 Minutes", labelHi: "10–20 मिनट", points: 3 },
      { label: "20+ Minutes", labelHi: "20 मिनट से ज़्यादा", points: 0 }
    ]
  },
  // REVISION (q5 - q8)
  {
    id: "q5",
    category: "Revision",
    text: "How often do you revise completed chapters?",
    textHi: "जो चैप्टर्स पूरे हो चुके हैं, उनका रिवीज़न आप कितनी बार करते हैं?",
    options: [
      { label: "Weekly", labelHi: "हर हफ़्ते", points: 10 },
      { label: "Every 2–3 Weeks", labelHi: "हर 2–3 हफ़्ते में", points: 7 },
      { label: "Occasionally", labelHi: "कभी-कभार", points: 3 },
      { label: "Almost Never", labelHi: "लगभग कभी नहीं", points: 0 }
    ]
  },
  {
    id: "q6",
    category: "Revision",
    text: "After 30 days, how much of a chapter do you typically remember?",
    textHi: "30 दिन बाद आपको किसी चैप्टर का कितना परसेंट याद रहता है?",
    options: [
      { label: "80–100%", labelHi: "80–100%", points: 10 },
      { label: "60–80%", labelHi: "60–80%", points: 7 },
      { label: "40–60%", labelHi: "40–60%", points: 3 },
      { label: "Less Than 40%", labelHi: "40% से कम", points: 0 }
    ]
  },
  {
    id: "q7",
    category: "Revision",
    text: "Do you maintain short notes or revision notes?",
    textHi: "क्या आप शॉर्ट नोट्स या रिवीज़न नोट्स बनाकर रखते हैं?",
    options: [
      { label: "For Every Chapter", labelHi: "हर चैप्टर के", points: 10 },
      { label: "For Most Chapters", labelHi: "ज़्यादातर चैप्टर्स के", points: 7 },
      { label: "For Few Chapters", labelHi: "कुछ ही चैप्टर्स के", points: 3 },
      { label: "No Notes", labelHi: "कोई नोट्स नहीं", points: 0 }
    ]
  },
  {
    id: "q8",
    category: "Revision",
    text: "Do you have a fixed revision schedule?",
    textHi: "क्या आपका रिवीज़न का कोई फिक्स शेड्यूल है?",
    options: [
      { label: "Always", labelHi: "हमेशा", points: 10 },
      { label: "Mostly", labelHi: "ज़्यादातर समय", points: 7 },
      { label: "Sometimes", labelHi: "कभी-कभी", points: 3 },
      { label: "Never", labelHi: "कभी नहीं", points: 0 }
    ]
  },
  // PRACTICE & CONCEPTS (q9 - q12)
  {
    id: "q9",
    category: "Accuracy",
    text: "When facing a difficult question, what do you usually do?",
    textHi: "कोई मुश्किल सवाल फंसने पर आप आमतौर पर क्या करते हैं?",
    options: [
      { label: "Try Multiple Approaches", labelHi: "अलग-अलग तरीके ट्राई करते हैं", points: 10 },
      { label: "Revisit Concepts", labelHi: "कॉन्सेप्ट्स दोबारा पढ़ते हैं", points: 7 },
      { label: "Check Solution Quickly", labelHi: "तुरंत सॉल्यूशन देख लेते हैं", points: 3 },
      { label: "Skip It", labelHi: "क्वेश्चन स्किप कर देते हैं", points: 0 }
    ]
  },
  {
    id: "q10",
    category: "Accuracy",
    text: "How often do you reattempt wrong questions?",
    textHi: "जो सवाल गलत हो जाते हैं, उन्हें दोबारा खुद से सॉल्व करते हैं?",
    options: [
      { label: "Always", labelHi: "हमेशा", points: 10 },
      { label: "Often", labelHi: "अक्सर", points: 7 },
      { label: "Sometimes", labelHi: "कभी-कभी", points: 3 },
      { label: "Never", labelHi: "कभी नहीं", points: 0 }
    ]
  },
  {
    id: "q11",
    category: "Accuracy",
    text: "How comfortable are you with applying concepts to new questions?",
    textHi: "नए क्वेश्चंस में कॉन्सेप्ट्स अप्लाई करने में आप कितने कॉन्फिडेंट हैं?",
    options: [
      { label: "Very Comfortable", labelHi: "बहुत कॉन्फिडेंट", points: 10 },
      { label: "Comfortable", labelHi: "कॉन्फिडेंट", points: 7 },
      { label: "Somewhat Comfortable", labelHi: "थोड़ा-बहुत कॉन्फिडेंट", points: 3 },
      { label: "Not Comfortable", labelHi: "कॉन्फिडेंस नहीं आता", points: 0 }
    ]
  },
  {
    id: "q12",
    category: "Accuracy",
    text: "How many quality questions do you solve daily?",
    textHi: "आप रोज़ाना कितने अच्छे लेवल के क्वेश्चंस सॉल्व करते हैं?",
    options: [
      { label: "100+", labelHi: "100 से ज़्यादा", points: 10 },
      { label: "50–100", labelHi: "50–100", points: 7 },
      { label: "20–50", labelHi: "20–50", points: 3 },
      { label: "Less Than 20", labelHi: "20 से कम", points: 0 }
    ]
  },
  // TEST PERFORMANCE (q13 - q16)
  {
    id: "q13",
    category: "Time Management",
    text: "How often do you take mock tests?",
    textHi: "आप कितनी बार मॉक टेस्ट देते हैं?",
    options: [
      { label: "Weekly", labelHi: "हर हफ़्ते", points: 10 },
      { label: "Twice Monthly", labelHi: "महीने में 2 बार", points: 7 },
      { label: "Monthly", labelHi: "महीने में 1 बार", points: 3 },
      { label: "Rarely", labelHi: "शायद ही कभी", points: 0 }
    ]
  },
  {
    id: "q14",
    category: "Time Management",
    text: "What do you do after a mock test?",
    textHi: "मॉक टेस्ट के बाद आप क्या करते हैं?",
    options: [
      { label: "Detailed Analysis", labelHi: "डिटेल्ड एनालिसिस करते हैं", points: 10 },
      { label: "Quick Review", labelHi: "जल्दी से एक बार देख लेते हैं", points: 7 },
      { label: "Only Check Score", labelHi: "सिर्फ मार्क्स/स्कोर देखते हैं", points: 3 },
      { label: "Move On", labelHi: "बिना एनालिसिस के आगे बढ़ जाते हैं", points: 0 }
    ]
  },
  {
    id: "q15",
    category: "Time Management",
    text: "How many mistakes are usually silly mistakes?",
    textHi: "आपकी गलतियों में से कितनी सिली मिस्टेक्स होती हैं?",
    options: [
      { label: "Very Few", labelHi: "बहुत कम", points: 10 },
      { label: "Some", labelHi: "कुछ गलतियाँ", points: 7 },
      { label: "Many", labelHi: "काफी गलतियाँ", points: 3 },
      { label: "Most Mistakes", labelHi: "ज़्यादातर गलतियाँ", points: 0 }
    ]
  },
  {
    id: "q16",
    category: "Time Management",
    text: "Do you maintain an error log of mistakes?",
    textHi: "क्या आप अपनी गलतियों की एरर नोटबुक/लॉग बनाते हैं?",
    options: [
      { label: "Always", labelHi: "हाँ, हमेशा", points: 10 },
      { label: "Often", labelHi: "अक्सर", points: 7 },
      { label: "Occasionally", labelHi: "कभी-कभार", points: 3 },
      { label: "Never", labelHi: "कभी नहीं", points: 0 }
    ]
  },
  // EXECUTION & MINDSET (q17 - q20)
  {
    id: "q17",
    category: "Confidence",
    text: "How often do you complete your planned study targets?",
    textHi: "आप अपने डेली स्टडी टारगेट्स कितनी बार पूरे कर पाते हैं?",
    options: [
      { label: "Almost Always", labelHi: "लगभग हमेशा", points: 10 },
      { label: "Often", labelHi: "अक्सर", points: 7 },
      { label: "Sometimes", labelHi: "कभी-कभी", points: 3 },
      { label: "Rarely", labelHi: "शायद ही कभी", points: 0 }
    ]
  },
  {
    id: "q18",
    category: "Confidence",
    text: "Current Pending Syllabus level?",
    textHi: "आपका कितना सिलेबस अभी पेंडिंग बचा है?",
    options: [
      { label: "No Pending Syllabus", labelHi: "कोई सिलेबस पेंडिंग नहीं है", points: 10 },
      { label: "Small Pending Syllabus", labelHi: "थोड़ा सा सिलेबस पेंडिंग है", points: 7 },
      { label: "Moderate Pending Syllabus", labelHi: "काफी सिलेबस पेंडिंग है", points: 3 },
      { label: "Large Pending Syllabus", labelHi: "बहुत सारा सिलेबस पेंडिंग है", points: 0 }
    ]
  },
  {
    id: "q19",
    category: "Confidence",
    text: "How do you react after a poor mock test?",
    textHi: "मॉक टेस्ट खराब होने पर आपका क्या रिएक्शन होता है?",
    options: [
      { label: "Analyze And Improve", labelHi: "एनालिसिस करके गलतियाँ सुधारते हैं", points: 10 },
      { label: "Recover Quickly", labelHi: "जल्दी बाउंस बैक करके आगे बढ़ते हैं", points: 7 },
      { label: "Feel Demotivated", labelHi: "डिमोटीवेट हो जाते हैं", points: 3 },
      { label: "Give Up For A While", labelHi: "कुछ दिन पढ़ाई छोड़ देते हैं", points: 0 }
    ]
  },
  {
    id: "q20",
    category: "Confidence",
    text: "How confident are you about achieving your target rank?",
    textHi: "अपनी टारगेट रैंक हासिल करने को लेकर आपको कितना कॉन्फिडेंस है?",
    options: [
      { label: "Very Confident", labelHi: "पूरा कॉन्फिडेंस है", points: 10 },
      { label: "Confident", labelHi: "कॉन्फिडेंस है", points: 7 },
      { label: "Unsure", labelHi: "निश्चित नहीं कह सकते", points: 3 },
      { label: "Not Confident", labelHi: "कॉन्फिडेंस नहीं है", points: 0 }
    ]
  }
];
