---
category: Miscellanea
title: The death of true romanisation
---

## Introduction

Recently I came across this [news article from the Japan Times][jptimes]{:
.link}. After [a year-long deliberation][japannews]{: .link}, the Japanese
Agency for Cultural Affairs has issued a recommendation "to replace the
government’s romanization system for the Japanese language". The current
official romanisation system in official Japanese documents and media is the
Kunrei style (`訓令式` lit. *Cabinet's style*). If ACA's recommendation is to
take place, the current Kunrei style is expected to be replaced by the Hepburn
style of romanisation. The difference between these two styles may not seem
much---as we will see momentarily---but the change effectively constitutes a
major defeat in standardisation, universality, and elegance.

## Romanisation and romanisation styles

Romanisation is the process of converting sounds, letters, or characters of a
language without Latin (Roman) characters to a particular set of characters in the
Latin (Roman) alphabet. Romanisation is useful since any given language can now
leverage the Latin alphabet to offer a foreign reader the possibility of
recognising, reading, and pronouncing a word they would otherwise not be able
to.

One might argue that the International Phonetic Alphabet is better suited for
this purpose--it is!---but romanisation also has the beneficial side effect of
helping with inputting and processing non-Latin words in Latin-script-based
systems, be them societal or computerised. 

Before we dive deeper into the differences between Kunrei and Hepburn, it is
necessary for us to look at one of the most basic foundations of the Japanese
language and the reason why romanisation exists in the first place. The
language is divided and pronounced in syllables and its native alphabet is,
thus, a syllabary. As we learnt in [a previous post on Japanese typography]({% post_url 2024-02-17-japanese-webfonts %}){: .link}, two
syllabaries representing the same sounds exist natively.

The set of sounds in the Japanese language can be expressed, broadly, as the
combination of fricative, glottal, and nasal sounds (*i.e.* consonants) and
vocal sounds (*i.e.* vowels), or vocal sounds alone. Tabularised, the syllabary
looks as follows: 

|            | $\phi$ | k  | g  | s  | z  | t  | d  | n  | h  | b  | p  | m  | r  | y  | w  |
| :--------: |:-----: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
| **$\phi$** |-       |-   |-   |-   |-   |-   |-   |ん  |-   |-   |-   |-   |-   |-   |-   |
| **a**      |あ      |か  |が  |さ  |ざ  |た  |だ  |な  |は  |ば  |ぱ  |ま  |ら  |や  |わ  |
| **i**      |い      |き  |ぎ  |し  |じ  |ち  |ぢ  |に  |ひ  |び  |ぴ  |み  |り  |　  |    |
| **u**      |う      |く  |ぐ  |す  |ず  |つ  |づ  |ぬ  |ふ  |ぶ  |ぷ  |む  |る  |ゆ  |    |
| **e**      |え      |け  |げ  |せ  |ぜ  |て  |で  |ね  |へ  |べ  |ぺ  |め  |れ  |　  |    |
| **o**      |お      |こ  |ご  |そ  |ぞ  |と  |ど  |の  |ほ  |ぼ  |ぽ  |も  |ろ  |よ  |を  |

*Gojûon: Basic consonant-vowel combinations of sounds present in modern-day standard
Japanese. The empty spaces in the `y` and `w` columns represent currently
unused sounds. The table has been left unromanised for the sake of argument.*
{: style="text-align:center"}

|            | k  | g  | s  | j  | t  | d  | n  | h  | b  | p  | m  | r  |
| :--------: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
| **ya**     |きゃ|ぎゃ|しゃ|じゃ|ちゃ|ぢゃ|にゃ|ひゃ|びゃ|ぴゃ|みゃ|りゃ|
| **yu**     |きゅ|ぎゅ|しゅ|じゅ|ちゅ|ぢゅ|にゅ|ひゅ|びゅ|ぴゅ|みゅ|りゅ|
| **yo**     |きょ|ぎょ|しょ|じょ|ちょ|ぢょ|にょ|ひょ|びょ|ぴょ|みょ|りょ|

*Yôon: Digraphs present in modern-day standard Japanese. They are written as the
combination of the `i` row and the `y` column in the previous table. The table has
been left unromanised for the sake of argument.*
{: style="text-align:center"}

### Kunrei style

Kunrei style romanises *gojûon* as the conditioned subset obtained from
the Cartesian product $C \times V$ of the set of consonants $C = \\{\phi, n, k,
g, s, z, t, d, n, h, b, p,  m, r, y, w\\}$ and the set of vowels $V = \\{\phi,
a, i, u, e, o\\}$, such that

$$ G = \{(x,y) \in C \times V \cup (n,\phi) \mid y \neq \phi \}. $$

For the less mathematically inclined, this means that either every Latin
consonant in the consonant set gets assigned a vowel in the vowel set or vowels
stand by themselves. The following table represents the Kunrei style of
romanisation.

|            | $\phi$ | k  | g  | s  | z  | t  | d  | n  | h  | b  | p  | m  | r  | y  | w  |
| :--------: |:-----: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
| **$\phi$** |-       |-   |-   |-   |-   |-   |-   |n   |-   |-   |-   |-   |-   |-   |-   |
| **a**      | a      |ka  |ga  |sa  |za  |ta  |da  |na  |ha  |ba  |pa  |ma  |ra  |ya  |wa  |
| **i**      | i      |ki  |gi  |si  |zi  |ti  |di  |ni  |hi  |bi  |pi  |mi  |ri  |　  |    |
| **u**      | u      |ku  |gu  |su  |zu  |tu  |du  |nu  |hu  |bu  |pu  |mu  |ru  |yu  |    |
| **e**      | e      |ke  |ge  |se  |ze  |te  |de  |ne  |he  |be  |pe  |me  |re  |　  |    |
| **o**      | o      |ko  |go  |so  |zo  |to  |do  |no  |ho  |bo  |po  |mo  |ro  |yo  |wo  |

*Tabularised version of the Kunrei style of romanisation for gojûon.*
{: style="text-align:center"}

Similarly, Kunrei style romanises *yôon* as the subset obtained from the Cartesian
product $C' \times P$ of the set of consonants $C' = \\{k, g, s, j, t, d, n, h,
b, p, m ,r\\}$ and the set of palatised sounds $P = \\{ya, yu, yo\\}$.

$$ Y = \{(x,y) \in C' \times P\}. $$

|            | k  | g  | s  | j  | t  | d  | n  | h  | b  | p  | m  | r  |
| :--------: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
| **ya**     |kya |gya |sya |jya |tya |dya |nya |hya |bya |pya |mya |rya |
| **yu**     |kyu |gyu |syu |jyu |tyu |dyu |nyu |hyu |byu |pyu |myu |ryu |
| **yo**     |kyo |gyo |syo |jyo |tyo |dyo |nyo |hyo |byo |pyo |myo |ryo |

*Tabularised version of the Kunrei style of romanisation for yôon.*
{: style="text-align:center"}

Both the fact that Kunrei style is strictly mathematically regular and the
fact that this romanisation was pushed by the Ministry of Education in 1937
have lead the Kunrei style to be recognised by ISO in ISO 3602.

This style, like many others in other languages, has notes that cover edge
cases or properties of the language. For instance, the circumflex accent in
both *gojûon* and *yôon* represents long vowels in Kunrei style.

Kunrei style is a slightly modified version of the 1885 romanisation style
called Nihon style (`日本式`, lit *Japanese style*), born from the necessity of
Japanese culture and language to interact, do business, and compete with
Latin-script-based cultures.

Kunrei style is a tool made by the Japanese language to represent Japanese
sounds using the Latin alphabet. し is transcribed as si<sub>Kunrei</sub>,
which represents the sound [ɕi].  It does not represent si<sub>English</sub>
(pronounced [siː]) nor si<sub>Spanish</sub> (pronounced [si]). Thus,

$$ し = si_{Kunrei} \neq si_{English} \neq si_{Spanish}. $$

$$ ほ = ho_{Kunrei} \neq ho_{English} \neq ho_{Spanish}. $$

### Hepburn style

Hepburn style romanises the Japanese language based on how an English-speaking
person would pronounce the particular syllable. The following table represents
the Hepburn style of romanisation. 

|            | $\phi$ | k  | g  | s   | z  | t   | d   | n  | h  | b  | p  | m  | r  | y  | w  |
| :--------: |:-----: |:-: |:-: |:-:  |:-: |:-:  |:-:  |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
| **$\phi$** |-       |-   |-   |-    |-   |-    |-    |n   |-   |-   |-   |-   |-   |-   |-   |
| **a**      | a      |ka  |ga  |sa   |za  |ta   |da   |na  |ha  |ba  |pa  |ma  |ra  |ya  |wa  |
| **i**      | i      |ki  |gi  |<span style="color:red">shi</span>  |<span style="color:red">ji</span>   |<span style="color:red">chi</span>  |<span style="color:red">ji</span>   |ni  |hi  |bi  |pi  |mi  |ri  |　  |    |
| **u**      | u      |ku  |gu  |su   |zu  |<span style="color:red">tsu</span>  |<span style="color:red">zu</span>  |nu  |<span style="color:red">fu</span>  |bu  |pu  |mu  |ru  |yu  |    |
| **e**      | e      |ke  |ge  |se   |ze  |te   |de   |ne  |he  |be  |pe  |me  |re  |　  |    |
| **o**      | o      |ko  |go  |so   |zo  |to   |do   |no  |ho  |bo  |po  |mo  |ro  |yo  |wo  |

*Tabularised version of the Hepburn style of romanisation for gojūon. Marked in
red are changes compared to Kunrei style.*
{: style="text-align:center"}

|            | k  | g  | s  | j  | t  | d  | n  | h  | b  | p  | m  | r  |
| :--------: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
| **ya**     |kya |gya |<span style="color:red">sha</span>|<span style="color:red">ja</span>|<span style="color:red">cha</span>|<span style="color:red">ja</span> |nya |hya |bya |pya |mya |rya |
| **yu**     |kyu |gyu |<span style="color:red">shu</span>|<span style="color:red">ju</span>|<span style="color:red">chu</span>|<span style="color:red">jo</span> |nyu |hyu |byu |pyu |myu |ryu |
| **yo**     |kyo |gyo |<span style="color:red">sho</span>|<span style="color:red">jo</span>|<span style="color:red">cho</span>|<span style="color:red">jo</span> |nyo |hyo |byo |pyo |myo |ryo |

*Tabularised version of the Hepburn style of romanisation for yōon. Marked in
red are changes compared to Kunrei style.*
{: style="text-align:center"}

Contrary to Kunrei, Hepburn style uses macrons to represent long vowels, like
in *gojūon* and *yōon*.

As you might have already realised, Hepburn style is not native. It was
invented by US physician James C. Hepburn in 1867.  Hepburn style does not
follow a regular, systematic approach at romanising Japanese. Instead, it
leverages English orthography and pronunciation to represent Japanese sounds.
This means that shi<sub>Hepburn</sub> represents the sound [ʃiː] instead of
[ɕi]. Thus,

$$ し \neq shi_{Hepburn} = shi_{English} \neq shi_{Spanish}. $$

$$ ほ \neq ho_{Hepburn} = ho_{English} \neq ho_{Spanish}. $$

## The issue

A good romanisation system should be consistent, universally applicable,
universally usable, and should faithfully and accurately reflect the source
language. By using English as a crutch, Hepburn style not only does not provide
an authentic insight into the Japanese language, it also essentially hinders
non-English speakers the ability to precisely integrate this romanisation into
their own language.

One might argue that English, being *de facto lingua franca* worldwide, is
justified in being a support language when interfacing with other,
non-Latin-based languages.  For this particular case, however, the idea is
quite daft and detrimental to the language being "helped", as English is not
even consistent with itself with regard to pronunciation, orthography, nor
spelling. 

Arabic has multiple romanisation methods, most of them not attached to any
third language. In the cases where the romanisation style uses foreign
orthography, like the case of Arabizi style, which is an informal romanisation
method that leverages the orthography of either French or English, it  uses
numerals when the Latin alphabet is not enough to transcribe or fully convey
parts of the language. Another example of a consistent, accurate, and universal
romanisation system is pinyin, also recognised by ISO in ISO 7098 and also
using its own notation set, independent of the pronunciation and orthography
from a third language, to transcribe the inherent idiosyncrasies of Mandarin
Chinese.

Leveraging a third language to romanise or transcribe any source language
subordinates the latter to the former. The change in the official style of
romanisation is, in a way, quite poetical, since it was General MacArthur who
pushed for the use of Hepburn style after Japan became yet another colony of
the US. 

### An example

The word for *sheep* is 羊 (ひつじ). In Kunrei style, it would be romanised as
*hituzi*, while in Hepburn style, it would be romanised a *hitsuji*. It is
entirely true that an anglophone would approximate the pronunciation of the
original word better when reading *hitsuji*. Let us take now a middle-aged
Spanish native person. This individual would natively pronounce the word as
/it͡suxi/, which is very different from both the English pronunciation and the
Japanese one.

"But wait", one might say, "wouldn't they get Kunrei style wrong as well?"
The answer to this is "yes". The main difference lies in the fact that, while
both romanisation methods require further knowledge about the source language,
Kunrei style does not require the user to rely on English as a middleware and
can interact directly with the original language without the need of an
intermediary. This is better in the long run for the source language, the user,
and for learners of the source language, as the user is actively using and
interacting with the original language.


[jptimes]: https://www.japantimes.co.jp/news/2025/08/21/japan/panel-hepburn-style-romanization/
[japannews]: https://japannews.yomiuri.co.jp/society/general-news/20240131-165580/
