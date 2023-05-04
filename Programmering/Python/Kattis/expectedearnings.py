class Calculator():
    def __init__(self):
        values = input().split()
        self.n = int(values[0])
        self.k = int(values[1])
        self.p = float(values[2])

    def WillWin(self):
        val = (self.n*self.p) - self.k
        if (val >= 0): #han tjänar på det (men han vill inte tjäna på det)
            print("spela inte!")
        else: 
            print("spela") #han förlorar på det (vilket han vill)

run = Calculator()
run.WillWin()