// Define the HTML for the select element as a string
const a = `
    <select>
        <option><a href = "/">UI / UX Designs</a></option>
        <option><a href = "/">Branding</a></option>
        <option><a href = "/">Graphics design</a></option>
        <option><a href = "/">Motion Graphics</a></option>
    </select>
`;

// Assign the string to the drop variable
const drop = a;

// Ensure that the element with id 'drop1' exists before trying to set its innerHTML
const drop1Element = document.getElementById('drop1');
if (drop1Element) {
    drop1Element.innerHTML = drop;
} else {
    console.error("Element with id 'drop1' not found");
}
