import classes from './meals-grid.module.css';

interface MealsGridProps {
    meals: any
}
export default function mealsGrid({meals}: MealsGridProps) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal: any) => (
                <li key={meal.id}></li>
            ))} 
        </ul>
    )
}