#i är rad, j är kolumn

class Person():
    def __init__(self, i, jList, index):
        self.i = i
        self.jList = jList
        self.index = index
        self.maxValue = max(jList)
        self.get2ndMaxValue()
    
    def get2ndMaxValue(self):
        copy = self.jList
        copy.remove(max(self.jList))
        self.secondMax = max(copy)

class Engine():
    def __init__(self):
        self.N = input()
        self.personList = []
        self.a = None
        self.b = None
        self.c = None

        for i in range(0, int(self.N)):
            valuesInput = input().split()
            values = []
            for j in range(0,len(valuesInput)):
                values.append(int(valuesInput[j]))
                person = Person(i,values, j)
                self.personList.append(person)

    def GetCurrentMaxValue(self, nextMaxValue): #finds the max-value to check
        if(nextMaxValue == None):
            tempList = []
            for n in range(0,len(self.personList)):
                tempList.append(max(self.personList[n].jList))
            self.c = max(tempList)
        else:
            for n in range(1, nextMaxValue): #get the 2nd max value by alreadyTested==2, 3d by alreadyTested ==3
                copy = self.personList
                copy.remove(max(copy))
            self.c = max(copy)

    def FindItemAtPerson(self, value, peopleList):
        tempList = []
        for n in range(0, len(peopleList)):
            if value in peopleList[n].jList:
                copy = peopleList[n].jList
                copy.remove(value)
                tempList.append(max(copy))
            else:
                pass
    
    def CheckForInvalidPeople(self):
        amount = 0
        self.invalidPeople = []
        for n in range(0, len(self.peopleList)):
            amount = self.peopleList[n].jList.count(0) #amt of zeros
            length = len(self.peopleList[n].jList) 
            if(amount == length or amount == (length-1)):
                self.invalidPeople.append(self.peopleList[n])
    
    def IsValidPerson(self, person):
        if person in self.invalidPeople:
            return False
        else:
            return True
    
    def GetMaxPersonRelations(self):
        self.c.maxValue
        index1 = self.c.jList.index(self.c.maxValue)
        index2 = self.c.jList.index(self.c.secondMaxValue)
        person1 = self.personList[index1]
        person2 = self.personList[index2]
        return person1, person2
    
    def CheckForDramaBetweenTwo(self,a,b):
        index = self.personList.index(b)
        if a.jList[index] == 0:
            return False
        else:
            self.b = b
            self.a = a
            return True

def main(engine):
    engine.CheckForInvalidPeople()
    engine.GetCurrentMaxValue()
    engine.IsValidPerson(engine.c)
    if (engine.CheckForDramaBetweenTwo(engine.GetMaxPersonRelations)):
        



run = Engine()
#main(run)