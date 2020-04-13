//Author: Alex Villier
//Date:   4/13/2020
//YouTube Showcase: https://youtu.be/FcSVwJGyyis

const int ledPin = 9;
const int analogIn = A0;
int incomingByte;
int joystickValue = 0;
int outputValue = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available() > 0){
    incomingByte = Serial.read();
    
    //If H, LED on
    if(incomingByte == 72){
      digitalWrite(ledPin, HIGH);
    } 
    //Else if L, LED off
    else if(incomingByte == 76){
      digitalWrite(ledPin, LOW);
    }

  }

  joystickValue = analogRead(analogIn);
  outputValue = map(joystickValue, 0, 1023, 0, 360);
  Serial.println(outputValue);
}
