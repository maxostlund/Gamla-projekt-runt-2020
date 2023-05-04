class Main():
    def __init__(self):
        self.string = input()
        self.amt_to_remove = 0
        self.chars = sorted(set(self.string))

        #even or uneven length of string
        if(len(self.string) % 2 == 0):
            self.GetAnswer(False)
        else:
            self.GetAnswer(True)
    
    def GetAnswer(self, needs_uneven_amt):
        singles = 0
        for n in self.chars:
            amt = self.string.count(n)
            if(amt == 1):
                singles += 1
            elif(amt % 2 == 0):
                pass
            else:
                if(needs_uneven_amt == True):
                    needs_uneven_amt = False
                else:
                    self.amt_to_remove += 1
        if(singles != 0):
            self.amt_to_remove += (singles-1)
        print(self.amt_to_remove)

run = Main()