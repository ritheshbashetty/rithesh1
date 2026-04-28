// Initialize Lucide Icons
lucide.createIcons();

// Simulate real-time dashboard data updates
document.addEventListener('DOMContentLoaded', () => {
    const shipmentCounter = document.getElementById('shipment-counter');
    
    // Initial value
    let shipments = 12450;
    
    // Simulate real-time data changes
    setInterval(() => {
        // Randomly add or subtract a small number
        const change = Math.floor(Math.random() * 5) - 1; // Bias towards adding
        shipments += change;
        
        // Format number with commas
        shipmentCounter.textContent = shipments.toLocaleString();
        
        // Add a brief subtle flash effect to indicate update
        shipmentCounter.style.color = 'var(--primary-cyan)';
        setTimeout(() => {
            shipmentCounter.style.color = '';
        }, 300);
        
    }, 3000);
});
