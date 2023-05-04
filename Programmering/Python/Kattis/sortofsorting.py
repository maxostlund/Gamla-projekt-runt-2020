class Name():
    def __init__(self, name, input_index):
        self.name = name
        self.input_index = input_index
        self.char1 = name[0]
        self.char2 = name[1]
        self.chars = name[0] + name[1]
    
    def IsCharacterUppercase(self, char):
        char_copy = char.upper() #turn into uppercase
        if(char == char_copy):
            return True
        else:
            return False

class Main():
    def __init__(self):
        pass

    def GetInput(self):
        n = int(input())
        if(n==0):
            print("STOP!")
            return None
        else:
            names = []
            for i in range(0,n):
                name = Name(input(), i)
                names.append(name)
            return names
    
    def Sort(self):
        names = self.GetInput()
        if(names == None):
            pass
        else:
            self.SortIntoSublists(names)
            self.SortSublists()

    def SortIntoSublists(self, names):
        #divide into all caps, first caps, all lower
            self.all_caps = []
            self.primary_caps = []
            self.caps_2nd = []
            self.lower_cases = []
            for i in range(0, len(names)):
                char1 = names[i].IsCharacterUppercase(names[i].char1)
                char2 = names[i].IsCharacterUppercase(names[i].char2)
                if(char1 == True and char2 == True): #if both first chars are uppercase then...
                    self.all_caps.append(names[i])
                elif(char1 == True and char2 == False):
                    self.primary_caps.append(names[i])
                elif(char1 == False and char2 == True):
                    self.caps_2nd.append(names[i])
                else:
                    self.lower_cases.append(names[i])
    
    def SortSublists(self):
        #sort all_caps
        self.all_caps.sort()
        print(self.all_caps)
    
    def AreEqual(self, name1, name2):
        char1 = name1.chars
        char2 = name2.chars
        if(char1 == char2):
            return True
        else:
            return False

run = Main()
run.Sort()