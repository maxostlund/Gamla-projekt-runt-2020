import nltk
from nltk.tokenize import word_tokenize

from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords


#For gensim
import gensim
import string
from gensim import corpora
from gensim.corpora.dictionary import Dictionary
from nltk.tokenize import word_tokenize

sample1 = "Our board of directors boasts 11 seasoned technology and business leaders from Adobe, GSK, HGGC and more."
sample2 = "Our executives lead by example and guide us to accomplish great things every day."
sample3 = "Working at Pluralisght means being surrounded by smart, passionate people who inspire us to do our best work."
sample4 = "A leadership team with vision."
sample5 = "Courses on cloud, microservices, machine learning, security, Agile and more."
sample6 = "Interactive courses and projects."
sample7 = "Personalized course recommendations from Iris."
sample8 = "We’re excited to announce that Pluralsight has ranked #9 on the Great Place to Work 2018, Best Medium Workplaces list!"
sample9 = "Few of the job opportunities include Implementation Consultant - Analytics, Manager - assessment production, Chief Information Officer, Director of Communications."

compiledoc = [sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9]

stopwords = set(stopwords.words("english"))
exclude = set(string.punctuation)
lemma = WordNetLemmatizer()

def clean(document):
    stopwordremoval = " ".join([i for i in document.lower().split() if i not in stopwords])
    punctuationremoval = ''.join(ch for ch in stopwordremoval if ch not in exclude)
    normalized = " ".join(lemma.lemmatize(word) for word in punctuationremoval.split())
    
    return normalized

final_doc = [clean(document).split() for document in compiledoc]

dictionary = corpora.Dictionary(final_doc)

DT_matrix = [dictionary.doc2bow(doc) for doc in final_doc]

Lda_object = gensim.models.ldamodel.LdaModel

lda_model_1 = Lda_object(DT_matrix, num_topics=2, id2word = dictionary)

print(lda_model_1.print_topics(num_topics=2, num_words=5))