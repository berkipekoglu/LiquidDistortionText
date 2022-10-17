const text = new Blotter.Text("Creativity takes courage.", {
    family: "Monument",
    size: 50,
    fill: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 100
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.2;
material.uniforms.uVolatility.value = 0.1;

let blotter = new Blotter(material, {
    texts: text
});



let el = document.getElementById("text");
let scope = blotter.forText(text);

scope.appendTo(el);

const p = document.createElement("p")
p.innerText = "~ Henri Matisse"
p.style.padding = "0 0 120px 120px"
el.appendChild(p)