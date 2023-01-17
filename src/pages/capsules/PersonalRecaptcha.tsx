import React, { useEffect, useState } from 'react';

interface Props {
    reset: boolean;
    handlerCheckRecaptcha: Function;
}

// Generate a random number 
const generateRandomIntegerInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Generate a random operator 
const generateRandomOperator = (operator: Array<string>) => {
    return operator[Math.floor(Math.random() * 3)];
};
// Generate Result of calcul
const resultCalcul = (num1: number, num2: number, operator: string) => {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else {
        return num1 * num2;
    }
};

// List of operators
const operator: Array<string> = ['+', '-', '*'];

const PersonnalRecaptcha = ({ reset, handlerCheckRecaptcha }: Props) => {

    const [value, setValue] = useState('');
    const [number1, setNumber1] = useState<number>(generateRandomIntegerInRange(1, 10));
    const [number2, setNumber2] = useState<number>(generateRandomIntegerInRange(1, 10));
    const [randomOperator, setRandomOperator] = useState<string>(generateRandomOperator(operator));

    const result = resultCalcul(number1, number2, randomOperator);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (Number(value) === result) handlerCheckRecaptcha(true);
        else {
            handlerCheckRecaptcha(false);
            alert(`Veuillez vérifier votre calcul`);
        };
        setValue('');

        // alert(`Value submitted: ${value}`);
        event.preventDefault();
    };

    const resetChallenge = () => {
        setNumber1(generateRandomIntegerInRange(1, 10));
        setNumber2(generateRandomIntegerInRange(1, 10));
        setRandomOperator(generateRandomOperator(operator));
    }

    useEffect(() => {
        if (reset) {
            resetChallenge();
        }
    }, [reset]);
    return (
        <>
            <div className="personal-recaptcha">
                <form onSubmit={handleSubmit}>
                    <label>
                        {number1} &nbsp; {randomOperator} &nbsp; {number2} &nbsp; =
                        <input type="number" value={value} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />

                </form>
                <button
                    onClick={resetChallenge}
                >RESET</button>
            </div>
        </>
    )
}

export default PersonnalRecaptcha;