class Translator():
    def __init__(self):
        self.input = input()
        self.ord = self.input.split()
        self.antal_ae = 0        

    def CheckForAE(self):
        for i in range(0, len(self.ord)):
            if ("ae" in self.ord[i]):
                self.antal_ae += 1
            else:
                pass
    
    def CalculateOutput(self):
        percentage = self.antal_ae/len(self.ord)
        if(percentage >= 0.4):
            print("dae ae ju traeligt va")
        elif(percentage < 0.4):
            print("haer talar vi rikssvenska")

run = Translator()
run.CheckForAE()
run.CalculateOutput()