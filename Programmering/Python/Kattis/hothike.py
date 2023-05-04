class Main():
    def __init__(self):
        self.GetInput()
        self.GetBestHikeDays()
        print(self.key, self.bestDay.get(self.key))
    
    def GetInput(self):
        self.days = int(input())
        self.temps = [int(val) for val in input().split()]
    
    def GetBestHikeDays(self):
        self.key = -1
        self.bestDay = {self.key : 41} #temp cannot get hotter than 41 and lower temps are always prioritised 
        for i in range(1, len(self.temps)-1):
            day1 = self.temps[i-1]
            day3 = self.temps[i+1]
            maxTemp = 0
            if(day1 > day3):
                maxTemp = day1
            else:
                maxTemp = day3
            res = {i : maxTemp}
            if(res.get(i) < self.bestDay.get(self.key)):
                self.key = i
                self.bestDay = {self.key : maxTemp}

run = Main()