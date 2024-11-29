// Functionality for Pay Now button
document.getElementById("pay-now-btn").addEventListener("click", () => {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]:checked');
    const selectedMethods = Array.from(paymentMethods).map((method) => method.value);

    if (selectedMethods.length === 0) {
        alert("Please select at least one payment method to proceed.");
    } else {
        alert(`You selected: ${selectedMethods.join(", ")}. Redirecting to payment gateway...`);
        // Redirect logic (e.g., redirect to a confirmation page or integrate payment gateway)
        window.location.href = "payment-confirmation.html"; // Replace with the actual confirmation page URL
    }
});
