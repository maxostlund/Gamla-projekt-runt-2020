class Main():
    def __init__(self):
        self.x = 0
        self.y = 0
        self.GetInput()
        self.GetCorrectInstructions()
        
    def GetInput(self):
        self.target_location = input().split()
        for i in range(0, len(self.target_location)):
            self.target_location[i] = int(self.target_location[i])
        self.n = int(input())
        self.instructions = []
        for i in range(0, self.n):
            self.instructions.append(input())
    
    def GetTargetLocation(self,list):
        x = 0
        y = 0
        rotation = 90 # begins looking up
        for i in range(0, len(list)):
            if(list[i] == "Forward"):
                if(rotation == 0):
                    x += 1
                elif(rotation == 90):
                    y += 1
                elif(rotation == 180):
                    x -= 1
                elif(rotation == 270):
                    y -=1
            elif(list[i] == "Left"):
                rotation += 90
                if (rotation == 360):
                    rotation = 0
            elif(list[i] == "Right"):
                rotation -= 90
                if(rotation == -90):
                    rotation = 270
        res = [x, y]
        return res
    
    def GetCorrectInstructions(self):  
        for i in range(0, len(self.instructions)):
            temp = list(self.instructions)
            if(temp[i] == "Forward"):
                temp[i] = "Left" #funkar det att omvandla till Left
                res = self.GetTargetLocation(temp)
                bool = self.AreCoordinatesEqual(res, self.target_location)
                if(bool == True):
                    self.Output(i, "Left")
                else:
                    temp[i] = "Right" #funkar det att omvandla till Right
                    res = self.GetTargetLocation(temp)
                    bool = self.AreCoordinatesEqual(res, self.target_location)
                    if(bool == True):
                        self.Output(i, "Right")
            elif(temp[i] == "Left"):
                temp[i] = "Forward"
                res = self.GetTargetLocation(temp)
                bool = self.AreCoordinatesEqual(res, self.target_location)
                if(bool == True):
                    self.Output(i, "Forward")
                else:
                    temp[i] = "Right"
                    res = self.GetTargetLocation(temp)
                    bool = self.AreCoordinatesEqual(res, self.target_location)
                    if(bool == True):
                        self.Output(i, "Right")
            elif(temp[i] == "Right"):
                temp[i] = "Forward"
                res = self.GetTargetLocation(temp)
                bool = self.AreCoordinatesEqual(res, self.target_location)
                if(bool == True):
                    self.Output(i, "Forward")
                else:
                    temp[i] = "Left"
                    res = self.GetTargetLocation(temp)
                    bool = self.AreCoordinatesEqual(res, self.target_location)
                    if(bool == True):
                        self.Output(i, "Left")
    
    def AreCoordinatesEqual(self, list1, list2):
        if(list1[0] == list2[0] and list1[1] == list2[1]):
            return True
        else:
            return False
    
    def Output(self, index, val):
        print((index+1), f"{val}")

run = Main()