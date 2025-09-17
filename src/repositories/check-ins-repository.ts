import { CheckIn, Prisma } from "generated/prisma";

export interface CheckInsRepository {
    findById(id: string): Promise<CheckIn | null>
    findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
    findManyByUserId(user_id: string, page: number): Promise<CheckIn[]>
    countByUserId(user_id: string): Promise<number>
    create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
    save(checkIn: CheckIn): Promise<CheckIn>
}