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

sample1 = "I had a package from someone I didn’t expect. Then a delivery man ringed teleport and told me I have a package so I opened the entrance door. Right after that I called my husband who was at home (1st floor) to get it, but he told me no one was there. Several days later, I got a letter saying that I can not be reached. I called DHL in Stockholm next morning, a guy answered my phone and scheduled a delivery next day. In the afternoon there was a woman who called me again to confirmed the delivery (I was so appreciated by then). Next day I waited the whole day at home waiting for the package, because they can not say roughly the time of delivery, but nothing was happened until midnight (16 Feb.). I called customer service the day after (today, 17 Feb.), but I was told the package returned to the sender. The guy who answered my phone told me that they can not do anything now, and asking me to contact the sender, but I do not know who sent the package (I guess it was a gift). It’s really disappointing experience, and making me not dare to use or recommend others to use DHL service any more."
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