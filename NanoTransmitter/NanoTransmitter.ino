#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

// Create an RF24 object
RF24 radio(9, 8);  // CE, CSN

// Address through which two modules communicate
const byte address[6] = "00001";

void setup() {
  Serial.begin(9600);

  // Initialize the radio and check if it's successful
  if (!radio.begin()) {
    Serial.println("Radio initialization failed!");
    while (1);
  } else {
    Serial.println("Radio initialization successful!");
  }

  // Set the address
  radio.openWritingPipe(address);

  // Set module as transmitter
  radio.stopListening();
}

void loop() {
  // Send message to receiver
  const char text[] = "Hello World";
  bool ok = radio.write(&text, sizeof(text));
  if (ok) {
    Serial.println("Message sent successfully");
  } else {
    Serial.println("Failed to send message");
  }
  
  delay(1000);
}
