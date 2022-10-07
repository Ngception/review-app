import { FC } from 'react'
import { Review } from '../../../shared/interfaces';
import { ReviewItem } from '../Item/ReviewItem';

interface ReviewListProps {
  reviews: Review[]
}

export const ReviewList: FC<ReviewListProps> = (props: ReviewListProps) => {
  return (
    <div data-testid="review-list">
    {props.reviews.map(review => <ReviewItem review={review} key={review.id}/>)}
    </div>
  )
}
