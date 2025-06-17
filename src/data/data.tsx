import LoginAmplifyAuth from "@/pages/LoginAmplifyAuth"
import Home from "../pages/Home"
import { KhmerWordPractice } from "../pages/KhmerWordPractice"
import LearnKhmer from "../pages/LearnKhmerPage"
import NameConverter from "../pages/NameConverter"
import { AppLinkType, CardDataType } from "./types"
import SpeakingPracticePage from "@/pages/SpeakingPracticePage"
import { PageNotFound } from "@/pages/PageNotFound"

export const appLinks: AppLinkType[] = [
    // {
    //     displayName: "Home",
    //     location: "/",
    //     component: <Home />,
    //     isEnabled: false
    // },
    {
        displayName: "Khmer Spelling Practice",
        location: "/",
        component: <KhmerWordPractice />,
        isEnabled: true
    },
    {
        displayName: "Login",
        location: "/login",
        component: <LoginAmplifyAuth />,
        isEnabled: true
    },
    {
        displayName: "Learn Khmer",
        location: "/learnKhmer",
        component: <LearnKhmer />,
        isEnabled: false
    },
    {
        displayName: "Name Converter",
        location: "/nameConverter",
        component: <NameConverter />,
        isEnabled: false
    },

    {
        displayName: "Khmer Spelling Practice",
        location: "/speakingPractice",
        component: <SpeakingPracticePage />,
        isEnabled: true
    },
    {
        displayName: '',
        location: "/*",
        component: <PageNotFound />,
        isEnabled: true
    }
]


// export const khmerVideosTsv = `title	description	youtubeLink	youtubeEbeddedLink	datePublished	googleDriveLink	pdfDownloadLink
// Say hello in Khmer and English	Hello! 🙏 Level 1 #cambodia #khmer #learnenglish #learnkhmer #khmerlish	https://youtube.com/shorts/lcQN9xIo_9o	https://youtube.com/embed/lcQN9xIo_9o	6/22/2024	https://drive.google.com/file/d/1J1yduH7KmjNGQCJyFWHZuEdz2Wzbo6al/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1J1yduH7KmjNGQCJyFWHZuEdz2Wzbo6al
// Let's chat in Khmer and English	Level 1 — hopefully this is helpful to some. Please follow to learn more :)   #cambodia #khmer #learnenglish #learnkhmer #khmerlish	https://youtube.com/shorts/gs8qE7laASg	https://youtube.com/embed/gs8qE7laASg	6/24/2024	https://drive.google.com/file/d/1-FEhloThNBwfzAccFrhxO3SkzhOjaEfk/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1-FEhloThNBwfzAccFrhxO3SkzhOjaEfk
// Introduce yourself in Khmer and English	Wishing you all good learnings today! I was born in Cambodia and raised in America. Hope you learned something :)  #cambodia  #learnkhmer  #learnenglish #khmerlish	https://youtube.com/shorts/QDO-AJ64nyA	https://youtube.com/embed/QDO-AJ64nyA	6/25/2024	https://drive.google.com/file/d/1TQktce3jmoI326WHgoBFYSJ8ibO5gs8W/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1TQktce3jmoI326WHgoBFYSJ8ibO5gs8W
// Colors in Khmer and English	When did you start learning khmer/english? Let me know if you have any requests. Just doing anything that would have helped me when i was learning english and re-learning khmer 😂  #khmer #learnkhmer #learnenglish #cambodia #khmerlish	https://youtube.com/shorts/hInib7OURP0	https://youtube.com/embed/hInib7OURP0	6/25/2024	https://drive.google.com/file/d/1N6D7Z0Zej9Bc6hqmnFpn03KQi1f0fUZH/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1N6D7Z0Zej9Bc6hqmnFpn03KQi1f0fUZH
// Basic numbers in Khmer	Thank you all for 277 followers at the time of recording and 333 at time of posting!! Straight forward base 5 counting. Love it. Will be making more :) so stick around.  #khmer #learnenglish #learnkhmer #cambodia #khmerlish	https://youtube.com/shorts/FEcoG8BqCBg	https://youtube.com/embed/FEcoG8BqCBg	6/26/2024	https://drive.google.com/file/d/1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1
// Basic numbers in English	Thank you for 277 followers at recording and 333 at posting!! Part 1 is out now, but if you’re watching this I don’t think you need the other 😂 I will be making more so stick around!   #english #learnenglish #learnkhmer #cambodia #khmerlish	https://youtube.com/shorts/2jwqLIx06UQ	https://youtube.com/embed/2jwqLIx06UQ	6/26/2024	https://drive.google.com/file/d/1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1
// Zodiac signs in Khmer and English	🐀 Rat gang where you at!? What year are you? And does anyone's mak/pa/e/pu/ kong/ma know why we have the formal years? If so, please share because i’d love to know #khmer #learnenglish #learnkhmer #cambodia #khmerlish	https://youtube.com/shorts/uMrsiOXyv1s	https://youtube.com/embed/uMrsiOXyv1s	6/28/2024	https://drive.google.com/file/d/1Qm7S6DehgopfQrfo9xK_OldUKz7Gjjvw/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1Qm7S6DehgopfQrfo9xK_OldUKz7Gjjvw
// Days of the week in Khmer and English	Try saying these 5 times fast 😮‍💨 Days of the week in khmer and english!   #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸	https://youtube.com/shorts/VAoOozg6ugk	https://youtube.com/embed/VAoOozg6ugk	6/28/2024	https://drive.google.com/file/d/1-3xG7oFvwLrS6enkes71g-bt_m_jX0vs/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1-3xG7oFvwLrS6enkes71g-bt_m_jX0vs
// Tableware in Khmer and English	Hit your unsuspecting khmer person with a “ខ្ញុំសមកែវមួយ។” [khnom som kaew mouy.] and watch their face   #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸	https://youtube.com/shorts/bcusXoQ0QyI	https://youtube.com/embed/bcusXoQ0QyI	6/29/2024	https://drive.google.com/file/d/1gU0WxeXTz0swTWc43usgcnhjIN258K72/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1gU0WxeXTz0swTWc43usgcnhjIN258K72
// Vegetables in Khmer and English	Practice next time you're getting groceries!  #khmer #vegetables #learnenglish #learnkhmer #cambodia #khmerlish	https://youtube.com/shorts/I26LhyMfE0M	https://youtube.com/embed/I26LhyMfE0M	6/30/2024	https://drive.google.com/file/d/1ccYfkDktSddWtcG-AfKlUVKRVBzV0iJt/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1ccYfkDktSddWtcG-AfKlUVKRVBzV0iJt
// Khmer alphabet - consonants	You got this!! 👏👏👏 Pro Tip: In english there are PLOSIVES like (b and p) where you’re blowing air out, but no IMPLOSIVE letters where you’re creating the sound by sucking in like the khmer ប“baw” or ឌ“do”. It can feel a bit silly at first, but exaderate the IMPLOSIVE at the start of the letter and see where that takes you.  📣 This is a lot so bookmark and take it as slow as you need. It’ll replay however many times you need. 🚄Playspeed also in the last row of share button to slow/speed up  Khmer alphabets - 33 Consonants. The highlighted parts are the lower case (or “legs”(jung) as a direct translation). 23 Vowels to come!  #Khmer #learnenglish #learnkhmer #cambodia #alphabet #khmerlish 🇰🇭🇺🇸	https://youtube.com/shorts/ZTmFUkhyrtA	https://youtube.com/embed/ZTmFUkhyrtA	7/2/2024	https://drive.google.com/file/d/1Kqo45uGD8A3ZIBKsZMJE0_3zI7WQSyTK/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1Kqo45uGD8A3ZIBKsZMJE0_3zI7WQSyTK
// Buddhist Chant in English!	Pali is a religious chant language, not so much a Khmer language, but we’ve all heard it at temple. More notes at bottom of page 🤓  Khmer chant  #Khmer #learnenglish #learnkhmer #cambodia #alphabet #khmerlish #pali 🇰🇭🇺🇸	https://youtube.com/shorts/4ThTNactKaU	https://youtube.com/embed/4ThTNactKaU	7/3/2024	https://drive.google.com/file/d/16FL8BQNUPjNMS9G18d2AcavVIDkDAsbd/view?usp=drive_link	https://drive.google.com/uc?export=download&id=16FL8BQNUPjNMS9G18d2AcavVIDkDAsbd
// Would You Still Love Me if I was a Worm?	Hope this video helped cleared up any confusion 🪱🪴❤️  this one was off the educational flavor, but was a really fun for me lol Hope your all having a great July 4th!!  #Khmer #learnenglish #learnkhmer #cambodia #alphabet 🇰🇭🇺🇸 #ifiwereaworm #khmerlish	https://youtube.com/shorts/BoHipNlL0hg	https://youtube.com/embed/BoHipNlL0hg	7/4/2024	https://drive.google.com/file/d/1LpdI9TUvrLlc9hXLFhpthTFgQF9foUeQ/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1LpdI9TUvrLlc9hXLFhpthTFgQF9foUeQ
// Asking to learn in Khmer and English	Never be afraid to ask :) hope these “how to” phrases will help you do that in 2 languages  #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸	https://youtube.com/shorts/AZoy1DEzQ5Q	https://youtube.com/embed/AZoy1DEzQ5Q	7/11/2024	https://drive.google.com/file/d/1HVabP9ZWdLC891sNP3BGZ51NzAwDB11T/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1HVabP9ZWdLC891sNP3BGZ51NzAwDB11T
// Anatomy in Khmer and English	Don't get confused next time you're at the doctor! 🧠🫘 thank you to brgfx / Freepik for the amazing human body image here. ————— #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸	https://youtube.com/shorts/4qqarCKrNkg	https://youtube.com/embed/4qqarCKrNkg	8/19/2024	https://drive.google.com/file/d/1Sm-oyMZ7xOZJGGv4vxyCMozeFhxQZfiG/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1Sm-oyMZ7xOZJGGv4vxyCMozeFhxQZfiG
// Shapes in Khmer and English	You’re amazing. You’re loved. And you’re more than enough ❤️ I hope your day is going well stranger.  Don't forget to like and subscribe.  Shapes in Khmer and English. Learn Khmer / Cambodian Language	https://youtube.com/shorts/dNYdBxsd7zI	https://youtube.com/embed/dNYdBxsd7zI	9/7/2024	https://drive.google.com/file/d/1aPyfCQI8sSzA5FdyOCx8o5QdcOC4lD9V/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1aPyfCQI8sSzA5FdyOCx8o5QdcOC4lD9V
// Honorifics in Khmer	Khmer Honorifics or Khmer pronouns or what to call people in Cambodian. Here’s a small guide to get tou though most day to day conversation.  Daily affirmation: You’re a wonderful human and I hope you have a great day ❤️ ———— #Khmer #learnenglish #learnkhmer #cambodia #honorifics #khmerlish 🇰🇭🇺🇸	https://youtube.com/shorts/YqpvJjADVTw	https://youtube.com/embed/YqpvJjADVTw	10/3/2024	https://drive.google.com/file/d/1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27
// Practice your Khmer honorifics	You know what they say: Practice makes avoiding an awkward exchange with the person behind the stall when you’re trying to buy some mangos 😂. The video with more details here: @khmerlish  #Khmer #learnenglish #learnkhmer #cambodia #Khmer #khmerlish Honorifics practice 🇰🇭🇺🇸	https://youtube.com/shorts/NRlelnVxqK0	https://youtube.com/embed/NRlelnVxqK0	10/7/2024	https://drive.google.com/file/d/1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27
// Tell time in Khmer and English	Currency of life. Thank you for spending some of it with me 🕰️ I hope you're having a wonderful day, starnger.  ------- Time in Khmer and English #Khmer #learnenglish #learnkhmer #cambodia #khmerlish	https://youtube.com/shorts/H8QmQBxlIO0	https://youtube.com/embed/H8QmQBxlIO0	11/14/2024	https://drive.google.com/file/d/1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27
// Pronouns in Khmer and English	sometimes seeing how the words are said helps.  #learnenglish #learnkhmer #cambodia #khmerlish	https://youtube.com/shorts/XSpWa8toycE	https://youtube.com/embed/XSpWa8toycE	1/28/2025	https://drive.google.com/file/d/1dkCz1txdL3w3fmCr6Fhlv_LVLxXKgjPb/view?usp=drive_link	https://drive.google.com/uc?export=download&id=1dkCz1txdL3w3fmCr6Fhlv_LVLxXKgjPb`

export const khmerVideosJson: CardDataType[] = [
    {
        "title": "Say hello in Khmer and English",
        "description": "Hello! 🙏 Level 1 #cambodia #khmer #learnenglish #learnkhmer #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/lcQN9xIo_9o",
        "youtubeEbeddedLink": "https://youtube.com/embed/lcQN9xIo_9o",
        "datePublished": "6/22/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1J1yduH7KmjNGQCJyFWHZuEdz2Wzbo6al/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1J1yduH7KmjNGQCJyFWHZuEdz2Wzbo6al"
    },
    {
        "title": "Let's chat in Khmer and English",
        "description": "Level 1 — hopefully this is helpful to some. Please follow to learn more :)   #cambodia #khmer #learnenglish #learnkhmer #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/gs8qE7laASg",
        "youtubeEbeddedLink": "https://youtube.com/embed/gs8qE7laASg",
        "datePublished": "6/24/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1-FEhloThNBwfzAccFrhxO3SkzhOjaEfk/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1-FEhloThNBwfzAccFrhxO3SkzhOjaEfk"
    },
    {
        "title": "Introduce yourself in Khmer and English",
        "description": "Wishing you all good learnings today! I was born in Cambodia and raised in America. Hope you learned something :)  #cambodia  #learnkhmer  #learnenglish #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/QDO-AJ64nyA",
        "youtubeEbeddedLink": "https://youtube.com/embed/QDO-AJ64nyA",
        "datePublished": "6/25/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1TQktce3jmoI326WHgoBFYSJ8ibO5gs8W/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1TQktce3jmoI326WHgoBFYSJ8ibO5gs8W"
    },
    {
        "title": "Colors in Khmer and English",
        "description": "When did you start learning khmer/english? Let me know if you have any requests. Just doing anything that would have helped me when i was learning english and re-learning khmer 😂  #khmer #learnkhmer #learnenglish #cambodia #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/hInib7OURP0",
        "youtubeEbeddedLink": "https://youtube.com/embed/hInib7OURP0",
        "datePublished": "6/25/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1N6D7Z0Zej9Bc6hqmnFpn03KQi1f0fUZH/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1N6D7Z0Zej9Bc6hqmnFpn03KQi1f0fUZH"
    },
    {
        "title": "Basic numbers in Khmer",
        "description": "Thank you all for 277 followers at the time of recording and 333 at time of posting!! Straight forward base 5 counting. Love it. Will be making more :) so stick around.  #khmer #learnenglish #learnkhmer #cambodia #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/FEcoG8BqCBg",
        "youtubeEbeddedLink": "https://youtube.com/embed/FEcoG8BqCBg",
        "datePublished": "6/26/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1"
    },
    {
        "title": "Basic numbers in English",
        "description": "Thank you for 277 followers at recording and 333 at posting!! Part 1 is out now, but if you’re watching this I don’t think you need the other 😂 I will be making more so stick around!   #english #learnenglish #learnkhmer #cambodia #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/2jwqLIx06UQ",
        "youtubeEbeddedLink": "https://youtube.com/embed/2jwqLIx06UQ",
        "datePublished": "6/26/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1Jbv4XmIJkKFvvMjZB2ZCit8iW2UHZPt1"
    },
    {
        "title": "Zodiac signs in Khmer and English",
        "description": "🐀 Rat gang where you at!? What year are you? And does anyone's mak/pa/e/pu/ kong/ma know why we have the formal years? If so, please share because i’d love to know #khmer #learnenglish #learnkhmer #cambodia #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/uMrsiOXyv1s",
        "youtubeEbeddedLink": "https://youtube.com/embed/uMrsiOXyv1s",
        "datePublished": "6/28/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1Qm7S6DehgopfQrfo9xK_OldUKz7Gjjvw/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1Qm7S6DehgopfQrfo9xK_OldUKz7Gjjvw"
    },
    {
        "title": "Days of the week in Khmer and English",
        "description": "Try saying these 5 times fast 😮‍💨 Days of the week in khmer and english!   #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/VAoOozg6ugk",
        "youtubeEbeddedLink": "https://youtube.com/embed/VAoOozg6ugk",
        "datePublished": "6/28/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1-3xG7oFvwLrS6enkes71g-bt_m_jX0vs/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1-3xG7oFvwLrS6enkes71g-bt_m_jX0vs"
    },
    {
        "title": "Tableware in Khmer and English",
        "description": "Hit your unsuspecting khmer person with a “ខ្ញុំសមកែវមួយ។” [khnom som kaew mouy.] and watch their face   #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/bcusXoQ0QyI",
        "youtubeEbeddedLink": "https://youtube.com/embed/bcusXoQ0QyI",
        "datePublished": "6/29/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1gU0WxeXTz0swTWc43usgcnhjIN258K72/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1gU0WxeXTz0swTWc43usgcnhjIN258K72"
    },
    {
        "title": "Vegetables in Khmer and English",
        "description": "Practice next time you're getting groceries!  #khmer #vegetables #learnenglish #learnkhmer #cambodia #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/I26LhyMfE0M",
        "youtubeEbeddedLink": "https://youtube.com/embed/I26LhyMfE0M",
        "datePublished": "6/30/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1ccYfkDktSddWtcG-AfKlUVKRVBzV0iJt/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1ccYfkDktSddWtcG-AfKlUVKRVBzV0iJt"
    },
    {
        "title": "Khmer alphabet - consonants",
        "description": "You got this!! 👏👏👏 Pro Tip: In english there are PLOSIVES like (b and p) where you’re blowing air out, but no IMPLOSIVE letters where you’re creating the sound by sucking in like the khmer ប“baw” or ឌ“do”. It can feel a bit silly at first, but exaderate the IMPLOSIVE at the start of the letter and see where that takes you.  📣 This is a lot so bookmark and take it as slow as you need. It’ll replay however many times you need. 🚄Playspeed also in the last row of share button to slow/speed up  Khmer alphabets - 33 Consonants. The highlighted parts are the lower case (or “legs”(jung) as a direct translation). 23 Vowels to come!  #Khmer #learnenglish #learnkhmer #cambodia #alphabet #khmerlish 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/ZTmFUkhyrtA",
        "youtubeEbeddedLink": "https://youtube.com/embed/ZTmFUkhyrtA",
        "datePublished": "7/2/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1Kqo45uGD8A3ZIBKsZMJE0_3zI7WQSyTK/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1Kqo45uGD8A3ZIBKsZMJE0_3zI7WQSyTK"
    },
    {
        "title": "Buddhist Chant in English!",
        "description": "Pali is a religious chant language, not so much a Khmer language, but we’ve all heard it at temple. More notes at bottom of page 🤓  Khmer chant  #Khmer #learnenglish #learnkhmer #cambodia #alphabet #khmerlish #pali 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/4ThTNactKaU",
        "youtubeEbeddedLink": "https://youtube.com/embed/4ThTNactKaU",
        "datePublished": "7/3/2024",
        "googleDriveLink": "https://drive.google.com/file/d/16FL8BQNUPjNMS9G18d2AcavVIDkDAsbd/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=16FL8BQNUPjNMS9G18d2AcavVIDkDAsbd"
    },
    {
        "title": "Would You Still Love Me if I was a Worm?",
        "description": "Hope this video helped cleared up any confusion 🪱🪴❤️  this one was off the educational flavor, but was a really fun for me lol Hope your all having a great July 4th!!  #Khmer #learnenglish #learnkhmer #cambodia #alphabet 🇰🇭🇺🇸 #ifiwereaworm #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/BoHipNlL0hg",
        "youtubeEbeddedLink": "https://youtube.com/embed/BoHipNlL0hg",
        "datePublished": "7/4/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1LpdI9TUvrLlc9hXLFhpthTFgQF9foUeQ/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1LpdI9TUvrLlc9hXLFhpthTFgQF9foUeQ"
    },
    {
        "title": "Asking to learn in Khmer and English",
        "description": "Never be afraid to ask :) hope these “how to” phrases will help you do that in 2 languages  #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/AZoy1DEzQ5Q",
        "youtubeEbeddedLink": "https://youtube.com/embed/AZoy1DEzQ5Q",
        "datePublished": "7/11/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1HVabP9ZWdLC891sNP3BGZ51NzAwDB11T/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1HVabP9ZWdLC891sNP3BGZ51NzAwDB11T"
    },
    {
        "title": "Anatomy in Khmer and English",
        "description": "Don't get confused next time you're at the doctor! 🧠🫘 thank you to brgfx / Freepik for the amazing human body image here. ————— #Khmer #learnenglish #learnkhmer #cambodia #khmerlish 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/4qqarCKrNkg",
        "youtubeEbeddedLink": "https://youtube.com/embed/4qqarCKrNkg",
        "datePublished": "8/19/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1Sm-oyMZ7xOZJGGv4vxyCMozeFhxQZfiG/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1Sm-oyMZ7xOZJGGv4vxyCMozeFhxQZfiG"
    },
    {
        "title": "Shapes in Khmer and English",
        "description": "You’re amazing. You’re loved. And you’re more than enough ❤️ I hope your day is going well stranger.  Don't forget to like and subscribe.  Shapes in Khmer and English. Learn Khmer / Cambodian Language",
        "youtubeLink": "https://youtube.com/shorts/dNYdBxsd7zI",
        "youtubeEbeddedLink": "https://youtube.com/embed/dNYdBxsd7zI",
        "datePublished": "9/7/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1aPyfCQI8sSzA5FdyOCx8o5QdcOC4lD9V/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1aPyfCQI8sSzA5FdyOCx8o5QdcOC4lD9V"
    },
    {
        "title": "Honorifics in Khmer",
        "description": "Khmer Honorifics or Khmer pronouns or what to call people in Cambodian. Here’s a small guide to get tou though most day to day conversation.  Daily affirmation: You’re a wonderful human and I hope you have a great day ❤️ ———— #Khmer #learnenglish #learnkhmer #cambodia #honorifics #khmerlish 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/YqpvJjADVTw",
        "youtubeEbeddedLink": "https://youtube.com/embed/YqpvJjADVTw",
        "datePublished": "10/3/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27"
    },
    {
        "title": "Practice your Khmer honorifics",
        "description": "You know what they say: Practice makes avoiding an awkward exchange with the person behind the stall when you’re trying to buy some mangos 😂. The video with more details here: @khmerlish  #Khmer #learnenglish #learnkhmer #cambodia #Khmer #khmerlish Honorifics practice 🇰🇭🇺🇸",
        "youtubeLink": "https://youtube.com/shorts/NRlelnVxqK0",
        "youtubeEbeddedLink": "https://youtube.com/embed/NRlelnVxqK0",
        "datePublished": "10/7/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27"
    },
    {
        "title": "Tell time in Khmer and English",
        "description": "Currency of life. Thank you for spending some of it with me 🕰️ I hope you're having a wonderful day, starnger.  ------- Time in Khmer and English #Khmer #learnenglish #learnkhmer #cambodia #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/H8QmQBxlIO0",
        "youtubeEbeddedLink": "https://youtube.com/embed/H8QmQBxlIO0",
        "datePublished": "11/14/2024",
        "googleDriveLink": "https://drive.google.com/file/d/1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1oxlQq_eq5WXNG9NGQ8WiA_X-nVxw5a27"
    },
    {
        "title": "Pronouns in Khmer and English",
        "description": "sometimes seeing how the words are said helps.  #learnenglish #learnkhmer #cambodia #khmerlish",
        "youtubeLink": "https://youtube.com/shorts/XSpWa8toycE",
        "youtubeEbeddedLink": "https://youtube.com/embed/XSpWa8toycE",
        "datePublished": "1/28/2025",
        "googleDriveLink": "https://drive.google.com/file/d/1dkCz1txdL3w3fmCr6Fhlv_LVLxXKgjPb/view?usp=drive_link",
        "pdfDownloadLink": "https://drive.google.com/uc?export=download&id=1dkCz1txdL3w3fmCr6Fhlv_LVLxXKgjPb"
    }
]