class InputHandler():
    def __init__(self):
        self.listOfListPairs = []
        self.GetNewInput()

    def GetNewInput(self):
        n = int(input())
        if(n == 0):
            self.GenerateOutput()
        else:
            self.GeneratePairOfLists(n)
            self.GetNewInput()

    def GeneratePairOfLists(self, n):
        list1, list2 = [], []
        for i in range(0, n):
            list1.append(int(input()))
        for i in range(0,n):
            list2.append(int(input()))
        pair = ListPair(list1, list2)
        self.listOfListPairs.append(pair)

    def GenerateOutput(self):
        for i in self.listOfListPairs:
            i.SortLists()
            i.Output()     

class ListPair():
    def __init__(self, ordered, unordered):
        self.ordered = ordered
        self.unordered = unordered
    
    def SortLists(self):
        list1 = sorted(self.ordered)
        list2 = sorted(self.unordered)
        index = 0
        for i in range(0, len(list1)):
            index = self.ordered.index(list1[i])
            val = list2[i]
            self.unordered[index] = val
    
    def Output(self):
        for i in self.unordered:
            print(i)
        print("")
        
main = InputHandler()