class ExtendedDate extends Date 
{
    getTextDate() 
    {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFutureOrToday() 
    {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const current = new Date(this);
        current.setHours(0, 0, 0, 0);

        return current >= today;
    }
}

const date = new ExtendedDate(2025, 9, 13);
document.write(`<p><b>${date.getTextDate()}</b> → ${date.isFutureOrToday()}</p>`);
