function volume_sphere() {
    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput);

    // Validate the input (non-negative number)
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate the volume using the formula V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume rounded to four decimal places
    document.getElementById("volume").value = volume.toFixed(4);
}
