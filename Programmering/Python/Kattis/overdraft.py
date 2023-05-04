class Main():
    def __init__(self):
        self.bal = 0
        self.minReq = 0
        self.GetInput()
        print(self.minReq)
    
    def GetInput(self):
        n = int(input())
        for i in range(0, n):
            change = int(input())
            self.bal += change
            if(self.bal < 0):
                test = abs(self.bal)
                if(test > self.minReq):
                    self.minReq = test
        

run = Main()