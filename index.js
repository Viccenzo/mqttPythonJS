var mqtt = require('mqtt');

let client;

try {
  //var client = mqtt.connect(process.env.BROKER_URL); Utilizar quando tiver com o server certo
  client = mqtt.connect('mqtt:0.0.0.0');
  //const data = fs.readFileSync(path.join(process.cwd(), 'config.json'))

  client.on("connect", () => {
    //console.info(`${kleur.green("✔")} successfully connected to broker`);
    console.log(client);
    client.publish("Viccenzo","Test1");
  });

  client.on("message", async (topic) => {
    if (topic === "device/client_error") {
      //console.error(`${kleur.red("✖")} could not save BMS`);
      console.log("erro");
    }
  });
} catch (e) {
  console.error(e);
  process.exit(0);
}

client.subscribe("test");

client.on('message', (topic,message) => {
  if(topic === "test"){
	console.log(message.toString());
  }
  else{
	console.log("tópico não existe");
  }
})
