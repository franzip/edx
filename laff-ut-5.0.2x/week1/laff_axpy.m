function [ y_out ] = laff_axpy( alpha, x, y )
% y_out = laff_axpy( alpha, x, y ) computes y_out = alpha * x + y.
%   Vectors x and y can be a mixture of column and/or row vector.  In other
%   words, x and y can be n x 1 or 1 x n arrays.  However, one size must 
%   equal 1 and the other size equal n.  
% 
%   The reason y is an input parameter is that the input y indicates 
%   whether the output, y_out, is a column or row vector.

% For convenience, we treat each vector as a m x n matrix where either m 
% or n equals 1, making it a row or column vector.

% Extract the row and column sizes of alpha, x, and y
[m_x, n_x] = size(x);
[m_y, n_y] = size(y);
[m_alpha, n_alpha] = size( alpha );

% Check if x and y are proper vectors
if (m_x ~= 1 & n_x ~= 1) | (m_y ~= 1 & n_y ~= 1 |  m_x * n_x ~= m_y * n_y)
    y_out = 'FAILED';
    return
end

% Check if alpha is a scalar
if (m_alpha ~=1 & n_alpha ~= 1)
    y_out = 'FAILED';
    return
end

if (n_x == 1)     % x is a column vector
    if (n_y == 1)     % y is a column vector
        % Scale
        for i=1:m_x   
            y(i,1) = (alpha * x(i,1)) + y(i,1);
        end
    else     % y is a row vector
        % Scale
        for i=1:m_x   
            y(1,i) = (alpha * x(i,1)) + y(1,i);
        end
    end
else    % x is a row vector
    if (n_y == 1)     % y is a column vector
        % Scale
        for i=1:n_x   
            y(i,1) = (alpha * x(1,i)) + y(i,1);
        end
    else     % y is a row vector
        % Scale
        for i=1:n_x   
            y(1,i) = (alpha * x(1,i)) + y(1,i);
        end
    end
end

% Return the updated y in y_out
y_out = y;

return
end
