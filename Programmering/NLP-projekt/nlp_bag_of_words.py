import nltk
from nltk.tokenize import word_tokenize
from collections import Counter

from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords



from nltk.tokenize import word_tokenize

text1 = "Avengers: Infinity War was a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. It is the 19th film in the Marvel Cinematic Universe (MCU). The running time of the movie was 149 minutes and the box office collection was around 2 billion dollars. (Source: Wikipedia)"

### 

tokens = word_tokenize(text1)
lowercase_tokens = [t.lower() for t in tokens]

bagofwords_1 = Counter(lowercase_tokens)

alphabets = [t for t in lowercase_tokens if t.isalpha()] #tar bort ord och karaktärer som inte finns med i engelska alfabetet.

words = stopwords.words("english") # tar bort s.k. stopwords, t.ex "the", "and", "is"
stopwords_removed = [t for t in alphabets if t not in words]

lemmatizer = WordNetLemmatizer() #lemmatisation, jag vet inte helt vad det betyder faktiskt.
lem_tokens = [lemmatizer.lemmatize(t) for t in stopwords_removed] #loopar genom stopwords_removed och använder objektet lemmatizer för lemmatization. (om jag förstått rätt så tar man bort grammatiska böjningar för att få ett grund-ord)

bag_words = Counter(lem_tokens)
print(bag_words.most_common(6))
 
###

