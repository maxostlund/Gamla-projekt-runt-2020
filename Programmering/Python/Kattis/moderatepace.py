import statistics

class Main():
    def __init__(self):
        self.days = (int(input()))
        self.daysYou = input().split()
        self.days1st = input().split()
        self.days2nd = input().split()
    
    def GenerateOutput(self):
        self.output = ""
        for i in range(0, self.days):
            temp = [int(self.daysYou[i]), int(self.days1st[i]),int(self.days2nd[i])]
            temp.sort()
            median = temp[1]
            if (i == 0):
                self.output = str(median)
            else:
                self.output += " " + str(median)
        print(self.output)

run = Main()
run.GenerateOutput()