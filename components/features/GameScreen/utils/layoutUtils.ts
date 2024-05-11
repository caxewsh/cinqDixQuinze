export const getPosition = (index: number, totalPlayers: number): { left: number; top: number } => {
    const angle = ((index / totalPlayers) * 360) + 90; // Offset by +90 degrees to start from the bottom
    const radius = 120; // Radius of the circle

    // Convert degrees to radians for cosine and sine functions
    const radians = (angle * Math.PI) / 180;
    
    // Adjust centering: Assuming the container size is 300x300 as defined earlier
    const containerCenter = 150;  // Half of the container dimension if it's 300x300

    return {
        left: containerCenter + (radius * Math.cos(radians)), // Center horizontally within container
        top: containerCenter + (radius * Math.sin(radians))  // Center vertically within container
    };
};
