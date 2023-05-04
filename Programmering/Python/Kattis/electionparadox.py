import math

class Main():
    def __init__(self):
        self.GetInput()
        self.min_win_amt = math.ceil(self.regions/2)
        self.GetSmallerRegions()
        self.win_min_amt = 0
        for i in self.small_regions:
            self.win_min_amt += self.GetMinAmtOfPeople(i)
        total = self.GetTotalAmtOfPeople()
        print(total-self.win_min_amt)

    def GetInput(self):
        self.regions = int(input())
        self.populations = [int(population) for population in input().split()]
    
    def GetSmallerRegions(self):
        self.populations.sort()
        self.small_regions = []
        for i in range(0, self.min_win_amt):
            self.small_regions.append(self.populations[i])

    def GetMinAmtOfPeople(self, region):
        amt = math.ceil(region/2)
        return amt
    
    def GetTotalAmtOfPeople(self):
        amt = 0
        for i in self.populations:
            amt += i
        return amt

run = Main()