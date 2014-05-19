console.log("Happy penguins");
void setup()
{
    size(1024,768);
    background(75);
    fill(255);
    noLoop();
    PFont fontA = loadFont("courier");
    textFont(fontA, 14);
}

void draw(){
    text("Hello node-webkit",20,20);
    printIn("Hello ErrorLog!");
}
