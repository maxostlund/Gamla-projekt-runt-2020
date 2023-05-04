class Stopwatch():
    def __init__(self):
        
        N = int(input())
        self.clickTimes = []
        for i in range(0, N):
            time = int(input())
            self.clickTimes.append(time)
    
    def CheckIfStillRunning(self):
        if(((len(self.clickTimes)%2) == 0)):
            return True
        else:
            print("still running")
    
    def GetTimerOutput(self):
        i = len(self.clickTimes)
        self.total = 0
        while (i>0):
            offVal = self.clickTimes[i-1]
            onVal = self.clickTimes[i-2]
            difference = offVal-onVal
            self.total += difference
            i -= 2
        print(self.total)

play = Stopwatch()
if(play.CheckIfStillRunning() == True):
    #forsätt
    play.GetTimerOutput()
else:
    pass
    
