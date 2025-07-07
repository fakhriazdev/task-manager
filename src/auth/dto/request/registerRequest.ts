// register-request.dto.ts
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsStrongPassword,
  Matches,
  IsEmail,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class RegisterRequest {
  @IsNotEmpty({ message: 'NIK tidak boleh kosong' })
  @IsString({ message: 'NIK harus berupa angka' })
  @MaxLength(9, { message: 'NIK maksimal 9 karakter' })
  @MinLength(9, { message: 'NIK minimal 9 karakter' })
  nik: string;

  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  @IsString({ message: 'Nama harus berupa teks' })
  nama: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  @MaxLength(16, { message: 'Password maksimal 16 karakter' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    },
    {
      message:
        'Password minimal 8 karakter dan harus mengandung huruf besar, huruf kecil, dan angka',
    },
  )
  password: string;

  @IsNotEmpty({ message: 'Nomor telepon tidak boleh kosong' })
  @Matches(/^[0-9]{10,13}$/, {
    message: 'Nomor telepon harus terdiri dari 10–13 digit angka dan hanya angka',
  })
  notelp: string;

  @IsNotEmpty({ message: 'Email tidak boleh kosong' })
  @IsEmail({}, { message: 'Format email tidak valid' })
  email: string;

  @IsNotEmpty({ message: 'Role tidak boleh kosong' })
  @IsString()
  roleId: string;

  @IsArray({ message: 'format accessStore tidak valid' })
  @ValidateNested({ each: true })
  @Type(() => StoreIdDto)
  accessStoreIds: StoreIdDto[];

  @IsArray({ message: 'format accessRegion tidak valid' })
  @ValidateNested({ each: true })
  @Type(() => StoreIdDto)
  accessRegionIds: regionIdDto[];
}

class regionIdDto {
  @IsNotEmpty({ message: 'region tidak boleh kosong' })
  @IsString({ message: 'Store harus berupa string' })
  regionId: string;
}

class StoreIdDto {
  @IsNotEmpty({ message: 'Store tidak boleh kosong' })
  @IsString({ message: 'Store harus berupa string' })
  storeId: string;
}
