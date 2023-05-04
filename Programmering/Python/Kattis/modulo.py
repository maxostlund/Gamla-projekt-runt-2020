class Main():
    def __init__(self):
        self.Input()
        self.Calculate()
    
    def Input(self):
        self.data = []
        for i in range(0,10):
            self.data.append(int(input()))

    def Calculate(self):
        self.values = []
        for i in self.data:
            val = (i % 42)
            if (val in self.values):
                pass
            else:
                self.values.append(val)
        print(len(self.values))

run = Main()