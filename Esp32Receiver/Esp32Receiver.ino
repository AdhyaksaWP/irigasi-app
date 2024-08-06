#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

// Create an RF24 object
RF24 radio(22, 21);  // CE, CSN

// Address through which two modules communicate
const byte address[6] = "00001";

void setup() {
  Serial.begin(115200);

  // Initialize the radio and check if it's successful
  if (!radio.begin()) {
    Serial.println("Radio initialization failed!");
    while (1);
  } else {
    Serial.println("Radio initialization successful!");
  }

  // Set the address
  radio.openReadingPipe(0, address);

  // Set module as receiver
  radio.startListening();
}

void loop() {
  // Read the data if available in buffer
  if (radio.available()) {
    char text[32] = {0};
    radio.read(&text, sizeof(text));
    Serial.print("Received: ");
    Serial.println(text);
  }
  // if (!radio.begin()) {
  //   Serial.println("Radio initialization failed!");
  //   while (1);
  // } else {
  //   Serial.println("Radio initialization successful!");
  // }
}
